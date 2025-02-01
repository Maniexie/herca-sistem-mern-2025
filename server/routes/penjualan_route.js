const express = require("express");
const penjualan_controller = require("../controllers/penjualan_controller");

const router = express.Router();

router.get("/penjualan", penjualan_controller.getPenjualan);
router.get("/penjualan/:id", penjualan_controller.getPenjualanById);
router.post("/penjualan", penjualan_controller.createPenjualan);
router.put("/penjualan/:id", penjualan_controller.updatePenjualan);
router.delete("/penjualan/:id", penjualan_controller.deletePenjualan);

module.exports = router;
