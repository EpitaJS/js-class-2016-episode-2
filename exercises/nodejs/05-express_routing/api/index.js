'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
	//res.send('hello from API sub-router !');
  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
  res.send(`
<!DOCTYPE html>
<head>
  <title>meta routes</title>
  <style type="text/css">
    body {
      margin: 40px;
      font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
      color: #333;
    }
  </style>
</head>

<h1>...</h1>
<li><a>${req.baseUrl}/rickroll</a>
<li><a>${req.baseUrl}/peppy</a>

<script>
  document.querySelector('h1').textContent = document.title;
  Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
    el.href || (el.href = el.text);
  });
</script>
  `);
});



// TODO one or two routes
// be creative !
router.get('/peppy', (req, res) => {
  console.log("Request: " + req.url);
  res.send('Do a barrel roll !');
});

router.get('/rickroll', (req, res) => {
  console.log("Request: " + req.url);
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
})



////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.params.name} !`);
});


router.get('/stuff/:id', function (req, res) {

  res.status(500).json({ error: 'not implemented !' })

  /*
   res.type('json').send({
   id: req.id
   });
   */
});
