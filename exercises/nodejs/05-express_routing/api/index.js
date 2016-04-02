'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');

var fs = require('fs');

/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<head>
  <title>Say my name</title>
  <style type="text/css">
    body {
      margin: 40px;
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      color: #333;
    }
  </style>
</head>
<h1>...</h1>
<li><a>${req.baseUrl}/saymyname/saymyname.html</a>
<script>
  document.querySelector('h1').textContent = document.title;
  Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
    el.href || (el.href = el.text);
  });
</script>
  `);
});

router.get('/saymyname/:path', function(req, res) {
  var filename = req.params.path;
  var localPath = __dirname + "/";

  localPath += filename;

  fs.exists(localPath, function (exists) {
    if (exists) {
      getFile(localPath, res);
    } else {
      res.writeHead(404);
      res.end();
    }
  })
});


function getFile(localPath, res) {
  fs.readFile(localPath, function(err, contents) {
    if(!err) {
      res.setHeader("Content-Length", contents.length);
      res.statusCode = 200;
      res.end(contents);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}
