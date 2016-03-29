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
 <li><a>${req.baseUrl}/hello</a>
 <li><a>${req.baseUrl}/are</a>
 <li><a>${req.baseUrl}/you</a>
 <li><a>${req.baseUrl}/ready</a>
 
 <script>
 	document.querySelector('h1').textContent = document.title;
 	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
 		el.href || (el.href = el.text);
 	});
 </script>
 `);
 });


router.get('/are', function(req, res) {
   res.send(`<img src="https://latimesherocomplex.files.wordpress.com/2010/03/6a00d8341c630a53ef0120a928a6f5970b-600wi.jpg">`)
});
  
router.get('/you', function(req, res) {
   res.send(`<img src="http://img.over-blog-kiwi.com/0/02/84/12/20140115/ob_1522c2_patate-femme.jpg">`)
});

router.get('/ready', function(req, res) {
   res.send(`<img src="http://vignette1.wikia.nocookie.net/aliceinwonderland/images/0/02/Chessur.jpg">`)
});

router.get('/hello', function (req, res) {
   res.send('Hello :)');
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
