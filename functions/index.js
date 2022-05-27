import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getAllQuotes, addQuote, deleteQuote } from './src/quotes.js';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/quotes', getAllQuotes);
app.post('/quotes', addQuote);
app.delete('/quotes/:quoteId', deleteQuote);
export const api = functions.https.onRequest(app);  //exporting the cloud function