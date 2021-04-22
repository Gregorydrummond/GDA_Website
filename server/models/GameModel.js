import mongoose from 'mongoose';
const {Schema} = mongoose;


const gameinfoSchema = new Schema({
    title: String,
    gameDescription: String,
    file: String,
    semester: String,
    genre1: String,
    genre2: String,
    contributors: String,
    otherInfo: String
});

const GameInfo = mongoose.model('Info', gameinfoSchema);

export default GameInfo;