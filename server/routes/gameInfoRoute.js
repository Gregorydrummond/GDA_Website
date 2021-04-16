import express from 'express'; 
import GameInfo from '../models/GameModel.js'

const router = express.Router();

router.route('/info').post((req, res) => {
    const title = req.body.title;
    const gameDescription = req.body.gameDescription;
    const file = req.body.file;
    
    const newInfo = new GameInfo({
        title,
        gameDescription,
        file
    });
    newInfo.save();
});

router.route("/info").get((req, res) => {
    GameInfo.find()
            .then(foundInfo => res.json(foundInfo))
})

export default router;