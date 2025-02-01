const express = require("express");

const marketing_route = require("./marketing_route");
const penjualan_route = require("./penjualan_route");
const komisi_route = require("./komisi_route");
const pembayaran_route = require("./pembayaran_route");

const router = express.Router();

router.use(marketing_route);
router.use(penjualan_route);
router.use(komisi_route);
router.use(pembayaran_route);

module.exports = router;
