'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
	res.send('hello from API sub-router !');
  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
});

var cats = [{id: "1", name: "toto"}, {id: "2", name: "tata"}, {id: "3", name: "titi"}];

router.get('/cat/:id', (req, res) => {
	var i = 0;
	while (i < cats.length) {
		if (cats[i].id === req.params.id) {
			res.status(200).json(cats[i]);
			return;
		}
		i += 1;
	}
	res.status(400).json({error: "cat not found for id = " + req.params.id + "!"});
});

router.post('/cat', function(req, res) {
	if (req.body.name) {
		cats.push({id: `${cats.length + 1}`, name: req.body.name});
		res.status(200).json(cats[cats.length - 1]);
	} else {
		res.status(401).json({error: "missing parameters!"});
	}
});



////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
	res.send(`Hello, ${req.params.name} !`);
});


router.get('/stuff/:id', function (req, res) {
  res.status(500).json({ error: 'not implemented !' })
});
