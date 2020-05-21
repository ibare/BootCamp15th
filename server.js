const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Bootcamp15th';
let db;
 
app.use(express.static('public'));

MongoClient.connect(url, { 
  useUnifiedTopology: true 
}, function(err, client) {
  console.log("Connected successfully to mongodb");
 
  db = client.db(dbName);

  app.listen(3000, function() {
    console.log('Ready to server')
  });
});

app.get('/api/bookmarks', (req, res) => {
  const bookmark = db.collection('bookmark');

  bookmark.find().toArray(function(err, docs) {
    console.log(err);
    console.log(docs);

    res.send(docs);
  });
});

