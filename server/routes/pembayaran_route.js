const express = require("express");
const router = express.Router();
const pembayaran_controller = require("../controllers/pembayaran_controller");

router.get("/pembayaran", pembayaran_controller.getAllPembayaran);
router.get("/pembayaran/:id", pembayaran_controller.getPembayaranById);
router.get(
  "/pembayaran-detail/:penjualan_id",
  pembayaran_controller.getPembayaranByPenjualanId
);
router.post("/pembayaran", pembayaran_controller.createPembayaran);

module.exports = router;
