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
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js

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
<li><a>${req.baseUrl}/firstname</a>
<li><a>${req.baseUrl}/lastname</a>
<li><a>${req.baseUrl}/age</a>
<li><a>${req.baseUrl}/university</a>
<li><a>${req.baseUrl}/runtime-error-direct</a>
<li><a>${req.baseUrl}/sync-error</a>
<li><a>${req.baseUrl}/runtime-error-next</a>
<li><a>${req.baseUrl}/async-error</a>
<li><a>${req.baseUrl}/timeout</a>
<li><a>${req.baseUrl}/timeout/3</a> (duration in s)

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

router.get('/firstname', function (req, res) {
  res.send('Raphael');
});

router.get('/lastname', function (req, res) {
  res.send('Hadjadj');
});

router.get('/age', function (req, res) {
  res.send('Almost 24!');
});

router.get('/university', function (req, res) {
  res.send('EPITA');
});

router.get('/runtime-error-direct', function (req, res) {
  // bad
  res.status(500).send('something blew up ! (sent directly, error middlewares not used)');
});

router.get('/runtime-error-next', function (req, res, next) {
  var err = new Error('A test exception passed to next()  !');
  err.status = 567;
  next(err);
});

router.get('/sync-error', function () {
  throw new Error('A test exception thrown synchronously !');
});

router.get('/async-error', function () {
  setTimeout(function() {
    throw new Error('A test exception thrown asynchronously !');
  }, 0);
});

router.get('/timeout', function () {
  // do nothing and let a timeout happen (hopefully)...
});

router.get('/timeout/:durationInSec', function (req, res) {
  var timeout = Number(req.params.durationInSec);
  if (_.isNaN(timeout)) {
    var err = new Error('You must provide a number in second !');
    err.status = 500;
    throw err;
  }
  else {
    setTimeout(function() {
      res.send('I waited ' + req.params.durationInSec + ' second(s).');
    }, timeout * 1000);
  }
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
