const mongoose = require("mongoose");

const penjualanSchema = new mongoose.Schema(
  {
    marketing_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Marketing",
      required: true,
    },
    transaction_number: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    cargo_fee: {
      type: Number,
      required: true,
    },
    total_balance: {
      type: Number,
      required: true,
    },
    grand_total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Penjualan", penjualanSchema);
