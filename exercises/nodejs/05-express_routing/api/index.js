'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
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
<h1>COUCOU</h1>   
`);

  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
});



// TODO one or two routes
// be creative !



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
