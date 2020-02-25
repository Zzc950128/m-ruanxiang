const express = require('express')
const app = express()
const fs = require('fs');

app.use('/about', express.static('project/about.html'))
app.use('/custom', express.static('project/custom.html'))
app.use('/document', express.static('project/document.html'))
app.use('/freeRead', express.static('project/freeRead.html'))
app.use('/index', express.static('project/index.html'))
app.use('/internationRead', express.static('project/internationRead.html'))
app.use('/join', express.static('project/join.html'))
app.use('/mixRead', express.static('project/mixRead.html'))
app.use('/payRead', express.static('project/payRead.html'))
app.use('/price', express.static('project/price.html'))
app.use(express.static('project/'))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.listen(3000, () => console.log('app listening on port 3000!'))