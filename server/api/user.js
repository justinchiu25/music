const router = require("express").Router();

router.get("/", async (req,res,next) => {
    console.log("user page")
    res.send("user page");
})

module.exports = router;