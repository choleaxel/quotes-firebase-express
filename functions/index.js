import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getAllQuotes } from './src/quotes.js';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/quotes', getAllQuotes);

export const api = functions.https.onRequest(app);  //exporting the cloud function