const router = require("express").Router();
module.exports = router;

router.use("/user", require("./user"));
router.use("/song", require("./song"));

router.use((req,res,next) => {
    const error = new Error("Route not found");
    res.status(404).send(error);
})