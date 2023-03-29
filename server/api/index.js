const router = require("express").Router();
const cors = require("cors");
module.exports = router;

router.use(cors());

router.use("/user", require("./user"));
router.use("/song", require("./song"));

router.use((req,res,next) => {
    const error = new Error("Route not found");
    res.status(404).send(error);
})