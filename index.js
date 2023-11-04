import express from 'express';
import plyerRouter from './routes/plyer_routes.js';
import cors from 'cors';

import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api', plyerRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))