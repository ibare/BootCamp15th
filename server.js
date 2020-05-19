const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.get('/users/', function(req, res) {
  res.send([
    { id: 1, name: '홍길동' },
    { id: 2, name: '김유신' },
  ])
});

app.get('/users/:id', function(req, res) {
  if(req.params.id === '1') {
    res.send({
      id: 1,
      name: '홍길동'
    })
  } else if (req.params.id === '2') {
    res.send({
      id: 2,
      name: '김유신'
    })  
  }
});

app.listen(3000);

