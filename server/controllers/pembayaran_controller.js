const Penjualan = require("../models/Penjualan");
const Pembayaran = require("../models/Pembayaran");

const createPembayaran = async (req, res) => {
  const { penjualan_id, amount_paid } = req.body;

  try {
    const penjualan = await Penjualan.findById(penjualan_id);
    if (!penjualan) {
      return res.status(404).json({
        message: "Penjualan dengan ID tersebut tidak ditemukan",
      });
    }

    const remaining_payment = penjualan.grand_total - amount_paid;

    if (remaining_payment < 0) {
      return res.status(400).json({
        message: "Jumlah yang dibayar melebihi grand total",
      });
    }

    const pembayaran = new Pembayaran({
      penjualan_id,
      amount_paid,
      remaining_payment,
    });

    await pembayaran.save();

    penjualan.grand_total = remaining_payment;
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

const getPembayaranByPenjualanId = async (req, res) => {
  const { penjualan_id } = req.params;

  try {
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
      message: "Daftar Pembayaran By Penjualan ID:" + penjualan_id,
      data: pembayaran,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data pembayaran",
      error: error.message,
    });
  }
};

const getPembayaranById = async (req, res) => {
  try {
    const id = req.params.id;
    const pembayaran = await Pembayaran.findById(id);

    if (!pembayaran) {
      return res.status(404).json({
        message: "Pembayaran tidak ditemukan",
      });
    }

    res.status(200).json({
      status_code: 200,
      message: "Detail Pembayaran By ID: " + req.params.id,
      data: pembayaran,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengambil data berdasarkan ID",
      error: error.message,
    });
  }
};

const getAllPembayaran = async (req, res) => {
  try {
    const pembayaran = await Pembayaran.find();

    if (!pembayaran) {
      return res
        .status(404)
        .json({ message: "Pembayaran not found", status_code: 404 });
    }

    res.status(200).json({
      status_code: 200,
      message: "List Of Pembayaran",
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
  getPembayaranByPenjualanId,
  getAllPembayaran,
  getPembayaranById,
};
