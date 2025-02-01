const Penjualan = require("../models/Penjualan");
const Pembayaran = require("../models/Pembayaran");

// API untuk membuat pembayaran
const createPembayaran = async (req, res) => {
  const { penjualan_id, jumlah_dibayar } = req.body;

  try {
    // Cari transaksi penjualan berdasarkan penjualan_id
    const penjualan = await Penjualan.findById(penjualan_id);
    if (!penjualan) {
      return res.status(404).json({
        message: "Penjualan dengan ID tersebut tidak ditemukan",
      });
    }

    // Hitung sisa pembayaran (grand_total - jumlah_dibayar)
    const sisa_pembayaran = penjualan.grand_total - jumlah_dibayar;

    if (sisa_pembayaran < 0) {
      return res.status(400).json({
        message: "Jumlah yang dibayar melebihi grand total",
      });
    }

    // Buat data pembayaran baru
    const pembayaran = new Pembayaran({
      penjualan_id,
      jumlah_dibayar,
      sisa_pembayaran,
    });

    // Simpan pembayaran
    await pembayaran.save();

    // Update grand_total pada penjualan dengan sisa pembayaran
    penjualan.grand_total = sisa_pembayaran;
    await penjualan.save();

    res.status(201).json({
      status_code: 201,
      message: "Pembayaran berhasil dicatat",
      data: pembayaran,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mencatat pembayaran",
      error: error.message,
    });
  }
};

// API untuk melihat daftar pembayaran untuk sebuah transaksi penjualan
const getPembayaranByPenjualan = async (req, res) => {
  const { penjualan_id } = req.params;

  try {
    // Cari semua pembayaran untuk transaksi penjualan tertentu
    const pembayaran = await Pembayaran.find({ penjualan_id }).populate(
      "penjualan_id"
    );

    if (!pembayaran || pembayaran.length === 0) {
      return res.status(404).json({
        message: "Pembayaran tidak ditemukan untuk penjualan ini",
      });
    }

    res.status(200).json({
      status_code: 200,
      message: "Daftar Pembayaran",
      data: pembayaran,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data pembayaran",
      error: error.message,
    });
  }
};

module.exports = {
  createPembayaran,
  getPembayaranByPenjualan,
};
