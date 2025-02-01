const express = require("express");
const marketing_controller = require("../controllers/marketing_controller");

const router = express.Router();

router.get("/marketing/:id", marketing_controller.getMarketingById);
router.get("/marketings", marketing_controller.getMarketing);
router.post("/marketing", marketing_controller.createMarketing);
router.put("/marketing/:id", marketing_controller.updateMarketing);
router.delete("/marketing/:id", marketing_controller.deleteMarketing);

module.exports = router;
