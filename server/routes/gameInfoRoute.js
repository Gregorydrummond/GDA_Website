import express from 'express'; 
import GameInfo from '../models/GameModel.js'

const router = express.Router();

router.route('/info').post((req, res) => {
    const title = req.body.title;
    const gameDescription = req.body.gameDescription;
    const file = req.body.file;
    const semester = req.body.semester;
    const genre1 = req.body.genre1;
    const genre2 = req.body.genre2;
    const contributors = req.body.contributors;
    const otherInfo = req.body.otherInfo;

    const newInfo = new GameInfo({
        title,
        gameDescription,
        file,
        semester,
        genre1,
        genre2,
        contributors,
        otherInfo,
    });
    newInfo.save();
});

router.route("/info").get((req, res) => {
    GameInfo.find()
            .then(foundInfo => res.json(foundInfo))
})

export default router;