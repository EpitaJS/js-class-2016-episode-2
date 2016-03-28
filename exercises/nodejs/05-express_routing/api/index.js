'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

//router.get('/', (req, res) => {
//	res.send('hello from API sub-router !');
  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
//});



// TODO one or two routes
// be creative !
router.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <head>
      <title>Frozen</title>
      <style type="text/css">
        body {
          margin:40px;
          font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
          color:#333;
        }
      </style>
    </head>
    <body>
      <h1>...</h1>
      <li><a>${req.baseUrl}/Anna</a></li>
      <li><a>${req.baseUrl}/Elsa</a></li>
      <li><a>${req.baseUrl}/Olaf</a></li>
      <li><a>${req.baseUrl}/Sven</a></li>
    </body>
    <script>
      document.querySelector('h1').textContent = document.title;
      Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
        el.href || (el.href = el.text);
      });
    </script>
  `)
});

router.get('/Anna', function(req, res) {
  res.sendfile('exercises/nodejs/05-express_routing/api/anna.jpg');
});

router.get('/Elsa', function(req, res) {
  res.sendfile('exercises/nodejs/05-express_routing/api/elsa.jpg');
});

router.get('/Olaf', function(req, res) {
  res.sendfile('exercises/nodejs/05-express_routing/api/olaf.jpg');
});

router.get('/Sven', function(req, res) {
  res.sendfile('exercises/nodejs/05-express_routing/api/sven.jpg');
});

////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.name} !`);
});


router.get('/stuff/:id', function (req, res) {

  res.status(500).json({ error: 'not implemented !' })

  /*
   res.type('json').send({
   id: req.id
   });
   */
});
