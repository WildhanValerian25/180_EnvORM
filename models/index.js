import express from 'express';
import dotenv from 'dotenv';
import KomikRoute from './routes/KomikRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;