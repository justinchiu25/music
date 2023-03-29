const router = require("express").Router();
const { CommandCompleteMessage } = require("pg-protocol/dist/messages");
const {
    models: { Song },
} = require("../db");

// api/song
router.get("/", async (req,res,next) => {
    try {
        const data = await Song.findAll({
    
            offset: 0,
            limit: 25
        })
        res.status(200).send(data);
    } catch (err) {
        next(err);
    }
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