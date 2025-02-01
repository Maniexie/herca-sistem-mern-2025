const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema(
  {
    penjualan_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Penjualan", // Menghubungkan dengan Penjualan
      required: true,
    },
    jumlah_dibayar: {
      type: Number,
      required: true,
      min: [0, "Jumlah yang dibayar tidak bisa kurang dari 0"],
    },
    sisa_pembayaran: {
      type: Number,
      required: true,
      min: [0, "Sisa pembayaran tidak bisa kurang dari 0"],
    },
    tanggal_pembayaran: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pembayaran", pembayaranSchema);
