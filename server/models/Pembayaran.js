const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema(
  {
    penjualan_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Penjualan",
      required: true,
    },
    amount_paid: {
      type: Number,
      required: true,
      min: [0],
    },
    remaining_payment: {
      type: Number,
      required: true,
      min: [0],
    },
    payment_date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pembayaran", pembayaranSchema);
