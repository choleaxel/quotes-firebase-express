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