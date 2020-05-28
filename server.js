const captureWebsite = require('capture-website');
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Bootcamp15th';
let db;
 
app.use(express.json()) 
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
  const bookmark = db.collection('bookmark');
  const targetUrl = req.body.url;
  const data = await captureWebsite.base64(targetUrl);
  const result = await bookmark.insertOne({
    url: targetUrl,
    title: '',
    description: '',
    thumbnail: data.toString('base64'),
  })
  const { url, title, description } = result

  res.send({
    url,
    title,
    description,
  })
})
