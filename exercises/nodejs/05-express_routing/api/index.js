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
	<title>hello ffrom API sub-router</title>
	<style type="text/css">
		body {
			margin: 40px;
			font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
			color: #333;
		}
	</style>
</head>

<h1>...</h1>
<li><a>${req.baseUrl}/hello/world</a>
<li><a>${req.baseUrl}/stuff/3</a>

<li><a href="${req.baseUrl}/starwars/1">Luke Skywalker</a>
<li><a href="${req.baseUrl}/starwars/2">C-3PO</a>
<li><a href="${req.baseUrl}/starwars/3">R2-D2</a>
<li><a href="${req.baseUrl}/starwars/4">Darth Vader</a>
<li><a href="${req.baseUrl}/starwars/5">Leia Organa</a>


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
const fetch = require('node-fetch');



router.get('/starwars/:id', function (req, res) {
  const url = 'http://swapi.co/api/people/' + req.params.id;

	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		res.send(`
	<!DOCTYPE html>
	<head>
		<title>hello ffrom API sub-router</title>
		<style type="text/css">
			body {
				margin: 40px;
				font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
				color: #333;
			}
		</style>
	</head>

	<h1>${json.name}</h1>
	<li><a>Height : ${json.height} cm</a>
	<li><a>Mass : ${json.mass} kg</a>
	<li><a>Hair : ${json.hair_color}</a>
	<li><a>Eye : ${json.eye_color}</a>
		`);
	});


});



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
