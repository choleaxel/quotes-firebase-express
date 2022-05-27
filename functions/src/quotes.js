import connectDb from "../connectDb.js";

export function getAllQuotes(req, res) {
    const db = connectDb();
    db.collection("quotes").get()
      .then(snapshot => {
        const quoteArray = snapshot.docs.map(doc => {
          let quote = doc.data();
          quote.id = doc.id;
          return quote;
        });
        res.send(quoteArray);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }

  export function addQuote(req, res) {
    if(!req.body) {
      res.status(401).send('Invalid request');
      return;
    }
    const db = connectDb();
    db.collection('quotes').add(req.body)
      .then(doc => {
        res.send('New Quote added' + doc.id)
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }


  export function deleteQuote(req, res) {
    const { quoteId } = req.params;
    if(!quoteId) {
      res.status(401).send('Invalid request');
      return;
    }
    const db = connectDb();
    db.collection('quotes').doc(quoteId).delete()
      .then(() => {
        res.send('Quote deleted! It must have been bad or offense I guess.');
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }