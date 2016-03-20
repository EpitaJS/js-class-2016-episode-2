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
<h1>NBA TEAMS API</h1>
<li><a>${req.baseUrl}/spurs</a>
<li><a>${req.baseUrl}/warriors</a>
<li><a>${req.baseUrl}/lakers</a>
<li><a>${req.baseUrl}/knicks</a>
<li><a>${req.baseUrl}/clippers</a>
<li><a>${req.baseUrl}/76ers</a>
<li><a>${req.baseUrl}/bulls</a>
<li><a>${req.baseUrl}/hawks</a>
<li><a>${req.baseUrl}/celtics</a>


<script>
  Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
    el.href || (el.href = el.text);
  });
</script>

`);

  // TODO a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
});

var teams = [
{name : 'Spurs', city: 'San Antonio', numberOfTitles : '5', currentCoach : 'Greg Popovitch', stadium : 'AT&T Center'},
{name : 'Warriors', city: 'Oakland', numberOfTitles : '4', currentCoach : 'Steve Kerr', stadium : 'Oracle Arena'},
{name : 'Lakers', city: 'Los Angeles', numberOfTitles : '16', currentCoach : 'Byron Scott', stadium : 'Staples Center'},
{name : 'Knicks', city: 'New York', numberOfTitles : '2', currentCoach : 'Kurt Rambis', stadium : 'Madison Square Garden'},
{name : 'Clippers', city: 'Los Angeles', numberOfTitles : '0', currentCoach : 'Doc Rivers', stadium : 'Staples Center'},
{name : '76ers', city: 'Philadelphia', numberOfTitles : '3', currentCoach : 'Brett Brown', stadium : 'Wells Fargo Center'},
{name : 'Bulls', city: 'Chicago', numberOfTitles : '6', currentCoach : 'Fred Hoiberg', stadium : 'United Center'},
{name : 'Hawks', city: 'Atlanta', numberOfTitles : '1', currentCoach : 'Mike Budenholzer', stadium : 'Philips Arena'},
{name : 'Celtics', city: 'Boston', numberOfTitles : '17', currentCoach : 'Brad Stevens', stadium : 'TD Garden'},
];

router.get('/spurs', function(req, res){
  res.json(teams[0]);
})

router.get('/warriors', function(req, res){
  res.json(teams[1]);
})

router.get('/lakers', function(req, res){
  res.json(teams[2]);
})

router.get('/knicks', function(req, res){
  res.json(teams[3]);
})

router.get('/clippers', function(req, res){
  res.json(teams[4]);
})

router.get('/76ers', function(req, res){
  res.json(teams[5]);
})

router.get('/bulls', function(req, res){
  res.json(teams[6]);
})

router.get('/hawks', function(req, res){
  res.json(teams[7]);
})

router.get('/celtics', function(req, res){
  res.json(teams[8]);
})
// TODO one or two routes
// be creative !



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
