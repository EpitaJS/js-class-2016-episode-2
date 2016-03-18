'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');
const path = require('path');
const fs = require('fs');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
	//res.send('hello from API sub-router !');
  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  });
  res.sendFile(path.join(__dirname, '/api.html'));
});



// TODO one or two routes
// be creative !
const weaponsFile = path.join(__dirname, '/weapons.json');
router.get('/weapons', function(req, res) {
  res.sendFile(weaponsFile);
});

router.get('/weapon/:id', function(req, res) {
  const data = require(weaponsFile);
  res.type('json').send(data[req.params.id]);
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
