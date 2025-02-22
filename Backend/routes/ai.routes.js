const { Router } = require("express");
const aiController = require("../controllers/ai.controller.js");

const router = Router(); 

router.get("/get-result", (req, res, next) => {

    aiController.getResult(req, res, next);
});

module.exports = router;

