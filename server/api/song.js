const router = require("express").Router();

router.get("/", async (req,res,next) => {
    console.log("song page")
    res.send("song page");
})

module.exports = router;