'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
//	res.send('hello from API sub-router !');
  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
  var routes = router.stack;
  var str = `
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

	<h1>...</h1>`;
	routes.forEach(function (route) {
		console.log(route);
		str += `<li><a href="/api${route.route.path}">${route.route.path}</a>`
	});
	res.send(str);
});



// TODO one or two routes
// be creative !

router.get('/repo/forks', function (req, res) {
	const fetch = require('node-fetch'); // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

	fetch('https://api.github.com/repos/EpitaJS/js-class-2016-episode-2/forks', [])
	.then(function (response) {
		if (response.ok)
		{
			response.json().then(function (data) {
				res.type('json').send(data);
			});
		}
		else
			throw new Error('Network response was not ok.');
	})
});

router.get('/repo/commits', function (req, res) {
	const fetch = require('node-fetch'); // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

	fetch('https://api.github.com/repos/MrCalen/js-class-2016-episode-2/commits', [])
	.then(function (response) {
		if (response.ok)
		{
			response.json().then(function (data) {
				res.type('json').send(data);
			});
		}
		else
			throw new Error('Network response was not ok.');
	})
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
