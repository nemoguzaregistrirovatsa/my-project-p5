'use strict';

var express = require('express');
var cors = require('cors');
var fileUpload = require('express-fileupload');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload());

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', function(req, res) {
  if (req.files==null) res.send('No files!')
  else res.json({name: req.files.upfile.name, type: req.files.upfile.mimetype, size: req.files.upfile.size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
