const Penjualan = require("../models/Penjualan");
const Marketing = require("../models/Marketing");

const calculateKomisi = (omzet) => {
  if (omzet >= 500000000) {
    return { percentage: 10, nominal: omzet * 0.1 };
  } else if (omzet >= 200000000) {
    return { percentage: 5, nominal: omzet * 0.05 };
  } else if (omzet >= 100000000) {
    return { percentage: 2.5, nominal: omzet * 0.025 };
  } else {
    return { percentage: 0, nominal: 0 };
  }
};

const getKomisiPerMarketing = async (req, res) => {
  const { year, month } = req.query; // Menerima tahun dan bulan sebagai query parameter

  try {
    // Mengambil semua penjualan berdasarkan bulan dan tahun
    const penjualan = await Penjualan.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(`${year}-${month}-01`),
            $lt: new Date(`${year}-${parseInt(month) + 1}-01`),
          },
        },
      },
      {
        $group: {
          _id: "$marketing_id", // Group berdasarkan marketing_id
          totalOmzet: { $sum: "$grand_total" }, // Total omzet per marketing
        },
      },
    ]);

    // Mengambil data marketing berdasarkan marketing_id
    const result = [];

    for (const item of penjualan) {
      const marketing = await Marketing.findById(item._id); // Mencari marketing berdasarkan id

      if (marketing) {
        // Hitung komisi berdasarkan total omzet
        const { percentage, nominal } = calculateKomisi(item.totalOmzet);

        result.push({
          marketing_name: marketing.name,
          bulan: `${month}-${year}`,
          omzet: item.totalOmzet,
          komisi_percentage: percentage,
          komisi_nominal: nominal,
        });
      }
    }

    res.status(200).json({
      status_code: 200,
      message: "Komisi marketing berhasil dihitung",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan", error: error.message });
  }
};

module.exports = { getKomisiPerMarketing };
