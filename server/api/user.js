const User = require("../db/models/User");

const router = require("express").Router();

router.get("/", async (req,res,next) => {
    console.log("user page")
    res.send("user page");
})

//Grabs user info
// api/user/:id
router.get("/:id", async (req,res,next) => {
    let userId = req.params.id;
    try {
        const userInfo = await User.findOne({
            where: {
                id: userId
            }
        })
        res.status(200).send(userInfo);
    } catch (err) {
        next(err);
    }
})

router.put("/:id", async (req,res,next) => {
    let userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        res.send(await user.update({about: "hello"}))
    } catch (err) {
        next(err);
    }
})

module.exports = router;