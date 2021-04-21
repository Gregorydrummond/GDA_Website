import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/gameInfoRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

//Connect to mongoose
const CONNECTION_URL = "mongodb+srv://admin:Password!@cluster0.5udid.mongodb.net/gdamembers?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);


app.use('/', router);


