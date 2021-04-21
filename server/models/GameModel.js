import mongoose from 'mongoose';
const {Schema} = mongoose;


const gameinfoSchema = new Schema({
    title: String,
    gameDescription: String,
    file: String
});

const GameInfo = mongoose.model('Info', gameinfoSchema);

export default GameInfo;