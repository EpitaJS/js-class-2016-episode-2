'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

/////////////////////////////////////////////

router.get('/', (req, res) => {
  // TODO a small page listing your endpoints

  res.send(`
<!DOCTYPE html>
<head>
	<title>Api routes</title>
	<style type="text/css">
		body {
			margin: 40px;
			font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
			color: #333;
		}
	</style>
</head>

<h1>...</h1>
<li><a>${ req.baseUrl }/sexyLady</a>
<li><a>${ req.baseUrl }/patate</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
});

// TODO one or two routes

router.get('/sexyLady', function(req, res) {
  res.send(`<img src="https://static.mmzstatic.com/wp-content/uploads/2012/01/trollface-meme.jpg">`)
});

router.get('/patate', function(req, res) {
  res.send(`<img src="http://img.over-blog-kiwi.com/0/02/84/12/20140115/ob_1522c2_patate-femme.jpg">`)
});

////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.name} !`);
});


router.get('/stuff/:id', function (req, res) {

  res.status(500).json({ error: 'not implemented !' });

  /*
   res.type('json').send({
   id: req.id
   });
   */
});
