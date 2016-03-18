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
<li><a>${req.baseUrl}/StephenKing</a>
<li><a>${req.baseUrl}/TennisTable</a>
<li><a>${req.baseUrl}/hello/Nicolas</a>
<li><a>${req.baseUrl}/stuff/1</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
});

router.get('/StephenKing', function (req, res) {
	res.send('Ses livres sont les meilleurs.');
});

router.get('/TennisTable', function (req, res) {
	res.send('PingPong');
});

////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.params.name} !`);
});


router.get('/stuff/:id', function (req, res) {
   res.type('json').send({
        id: req.params.id
   });
});
