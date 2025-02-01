const Penjualan = require("../models/Penjualan");

const generateTransactionNumber = async (req, res) => {
  const lastPenjualan = await Penjualan.findOne().sort({
    transaction_number: -1,
  });
  if (!lastPenjualan) {
    return "TRX001";
  }

  const lastTransactionNumber = lastPenjualan.transaction_number;
  const lastNumber = parseInt(lastTransactionNumber.replace("TRX", ""), 10);
  const newNumber = lastNumber + 1;
  return "TRX" + newNumber.toString().padStart(3, "0");
};

module.exports = generateTransactionNumber;
