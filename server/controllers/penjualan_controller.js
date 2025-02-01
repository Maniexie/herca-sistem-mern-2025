const { default: mongoose } = require("mongoose");
const Penjualan = require("../models/Penjualan");
const generateTransactionNumber = require("../utils/generateTransactionNumber");

const getPenjualan = async (req, res) => {
  try {
    const penjualan = await Penjualan.find();

    if (!penjualan) {
      return res.status(404).json({ message: "Penjualan not found" });
    }

    res.status(200).json({
      status_code: 200,
      message: "List Of Penjualan",
      data: penjualan,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPenjualanById = async (req, res) => {
  try {
    const id = req.params.id;
    const penjualan = await Penjualan.findById(id);

    if (!penjualan) {
      return res.status(404).json({
        status_code: 404,
        message: "Penjualan not found",
      });
    }

    res.status(200).json({
      status_code: 200,
      message: "List Of Penjualan By ID",
      data: penjualan,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPenjualan = async (req, res) => {
  const { marketing_id, cargo_fee, total_balance } = req.body;

  if (isNaN(cargo_fee) || isNaN(total_balance)) {
    return res
      .status(400)
      .json({ message: "Cargo fee and total balance must be numbers" });
  }

  try {
    const transaction_number = await generateTransactionNumber();
    const grand_total = cargo_fee + total_balance;
    const date = new Date();

    const penjualan = new Penjualan({
      marketing_id: new mongoose.Types.ObjectId(marketing_id),
      transaction_number: transaction_number,
      date: date,
      cargo_fee: cargo_fee,
      total_balance: total_balance,
      grand_total: grand_total,
    });

    await penjualan.save();

    res.status(201).json({
      status_code: 201,
      message: "Penjualan Successfully created",
      data: penjualan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan saat menyimpan data penjualan",
      error: error.message,
    });
  }
};

const updatePenjualan = async (req, res) => {
  const { cargo_fee, total_balance } = req.body;

  if (isNaN(cargo_fee) || isNaN(total_balance)) {
    return res
      .status(400)
      .json({ message: "Cargo fee and total balance must be numbers" });
  }
  try {
    const penjualan = await Penjualan.findById(req.params.id);

    if (!penjualan) {
      return res.status(404).json({ message: "Penjualan not found" });
    }

    penjualan.cargo_fee = req.body.cargo_fee || penjualan.cargo_fee;
    penjualan.total_balance = req.body.total_balance || penjualan.total_balance;
    penjualan.date = new Date();

    penjualan.grand_total = penjualan.total_balance + penjualan.cargo_fee;

    await penjualan.save();

    res.status(200).json({
      status_code: 200,
      message: "Penjualan successfully updated",
      data: penjualan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan Saat Update Data Penjualan",
      error: error.message,
    });
  }
};

const deletePenjualan = async (req, res) => {
  try {
    const penjualan = await Penjualan.findByIdAndDelete(req.params.id);

    if (!penjualan) {
      return res.status(404).json({ message: "Penjualan not found" });
    }

    res.status(200).json({
      status_code: 200,
      message: "Penjualan successfully deleted",
      data: penjualan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan saat menghapus data penjualan",
      error: error.message,
    });
  }
};

module.exports = {
  getPenjualan,
  getPenjualanById,
  createPenjualan,
  updatePenjualan,
  deletePenjualan,
};
