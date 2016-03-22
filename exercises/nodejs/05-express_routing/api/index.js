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
<p>
    Routes : /add/x1/x2
            /multiply/x1/x2
</p>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
});


router.get('/add/:x1/:x2', function (req, res) {
    var x = parseInt(req.params.x1) + parseInt(req.params.x2);
    var result = x.toString();
    res.send(result);
});

router.get('/multiply/:x1/:x2', function (req, res) {
    var x = parseInt(req.params.x1) * parseInt(req.params.x2);
    var result = x.toString();
    res.send(result);
});

////////////////// examples //////////////
router.get('/stuff/:id', function (req, res) {

  res.status(500).json({ error: 'not implemented !' })

  /*
   res.type('json').send({
   id: req.id
   });
   */
});
