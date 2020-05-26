const captureWebsite = require('capture-website');
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Bootcamp15th';
let db;
 
app.use(express.static('public'));

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  console.log("Connected successfully to mongodb");
 
  db = client.db(dbName);

  app.listen(3000, function() {
    console.log('Ready to server')
  });
});

app.get('/api/bookmarks', async (req, res) => {
  const bookmark = db.collection('bookmark');
  const docs = await bookmark.find().toArray();

  res.send(docs);
});

app.post('/api/bookmarks', async (req, res) => {

  // await captureWebsite.file('https://apple.com', 'screenshot.png');
  const data = await captureWebsite.base64('https://apple.com');

  res.send(data);
});
