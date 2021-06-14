import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';

import { todoRoute } from './routes/todo.route';
import connectDB from './database/mongoConfig'

const app = express();
app.use(cors());
connectDB()

const PORT: string | number = process.env.PORT || 3500

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', todoRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Cabbage Apps Start' });
});


app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
})