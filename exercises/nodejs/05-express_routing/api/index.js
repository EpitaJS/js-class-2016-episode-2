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

<h1>...</h1>
<li><a>${req.baseUrl}/photos</a>
<li><a>${req.baseUrl}/facebook</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
});

router.get('/photos', function (req, res) {
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

<h1>Photos</h1>
<img src="http://vignette3.wikia.nocookie.net/ssb/images/2/2b/Lol-face.gif/revision/latest?cb=20100823094728" />

	`);
});

router.get('/facebook', (req, res) => {
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
Redirection...<br />

<script>
	window.location = 'http://www.facebook.fr';
</script>
	`);
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
