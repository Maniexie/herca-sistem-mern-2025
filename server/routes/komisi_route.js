const express = require("express");
const komisi_controller = require("../controllers/komisi_controller");

const router = express.Router();

router.get("/komisi", komisi_controller.getKomisiPerMarketing);

module.exports = router;
