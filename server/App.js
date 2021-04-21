import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/gameInfoRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

//Connect to mongoose
const CONNECTION_URL = "mongodb+srv://admin:Password!@cluster0.5udid.mongodb.net/gdamembers?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
	console.log(`Successfully connected to mongoose database.`)
});

app.use('/', express.static(path.resolve("../client/build")));
app.use('/', router);
app.get('*', (req, res) => {
    res.sendFile(path.resolve("../client/build/index.html"));
});
app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
