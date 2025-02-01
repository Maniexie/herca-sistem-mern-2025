const express = require("express");
const router = express.Router();
const pembayaran_controller = require("../controllers/pembayaran_controller");

router.post("/pembayaran/", pembayaran_controller.createPembayaran);

// Route untuk melihat pembayaran berdasarkan penjualan_id
router.get(
  "/pembayaran/:penjualan_id",
  pembayaran_controller.getPembayaranByPenjualan
);

module.exports = router;
