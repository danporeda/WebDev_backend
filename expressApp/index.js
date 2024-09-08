const express = require("express");
const app = express();

app.listen(3000, () => console.log("listening on port 3000"));

app.get('/', (req, res) => {
  res.send('welcome to the show');
})

// req.params
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`this is a subbreddit of ${subreddit}`);
})

//req.query
app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Aint no fuckin search term');
    console.log('no term');
  }
  res.send(`Search results for: ${q}`);
  console.log('yes term');
})

app.get('/cats', (req, res) => {
  res.send('meow');
});

app.get('/dogs', (req, res) => {
  res.send('bark');
})

app.get('*', (req, res) => {
  res.send('yea whateva');
})