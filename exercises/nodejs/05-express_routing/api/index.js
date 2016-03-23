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

	res.send(`
<!DOCTYPE html>
<head>
	<title>api routes</title>
	<style type="text/css">
		body {
			margin: 40px;
			font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
			color: #333;
		}
	</style>
</head>

<h1>...</h1>
<li><a>${req.baseUrl}/Hello</a>
<li><a>${req.baseUrl}/headsOrTail</a>
<li><a>${req.baseUrl}/randomCat</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
});

router.get('/Hello', function (req, res) {
	res.send('Hello you! :)');
});

router.get('/headsOrTail', function (req, res) {
	var coinFlipped = Math.random();
	if (coinFlipped < 0.5) {
		res.send('Heads !');
	} else {
		res.send('Tail !')
		}
});

router.get('/randomCat', function (req, res) {
	res.send(`
		<a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif"></a>
		<h1>So cute.. isn't it?</h1>
`);
});
// TODO one or two routes
// be creative !



////////////////// examples //////////////
/*
router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.name} !`);
});


router.get('/stuff/:id', function (req, res) {

  //res.status(500).json({ error: 'not implemented !' })


   res.type('json').send({
   id: req.id
   });

});
*/
