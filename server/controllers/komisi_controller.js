const Penjualan = require("../models/Penjualan");
const Marketing = require("../models/Marketing");
const calculateKomisi = require("../utils/calculateKomisi");

const getKomisiPerMarketing = async (req, res) => {
  const { year, month } = req.query;

  try {
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
          _id: "$marketing_id",
          totalOmzet: { $sum: "$grand_total" },
        },
      },
    ]);

    const marketingData = await Marketing.find({});

    const result = [];

    for (const marketing of marketingData) {
      const penjualanItem = penjualan.find(
        (item) => item._id.toString() === marketing._id.toString()
      );

      let totalOmzet = 0;
      if (penjualanItem) {
        totalOmzet = penjualanItem.totalOmzet;
      }

      const { percentage, nominal } = calculateKomisi(totalOmzet);

      result.push({
        marketing_name: marketing.name,
        bulan: `${month}-${year}`,
        omzet: totalOmzet,
        komisi_percentage: percentage,
        komisi_nominal: nominal,
      });
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
