const router = require("express").Router();
const { CommandCompleteMessage } = require("pg-protocol/dist/messages");
const {
    models: { Song },
} = require("../db");

// api/song
router.get("/", async (req,res,next) => {
    console.log("song page")
    res.send("song page");
})

//Grabs song info
// api/song/:id
router.get("/:id", async (req,res,next) => {
    let songId = req.params.id;
    try {
        const songInfo = await Song.findOne({
            where: {
                id: songId
            }
        })
        res.status(200).send(songInfo);
    } catch (err) {
        next(err);
    }
})

module.exports = router;