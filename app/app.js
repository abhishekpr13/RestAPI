import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import initializeRoutes from "./app/routes/index.js";
import models from './app/models/index.js';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded())
    mongoose.connect(process.env.MONGO_CONNECTION);
    initializeRoutes(app);
}

export default initialize;