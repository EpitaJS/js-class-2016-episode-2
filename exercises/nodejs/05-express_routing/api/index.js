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
<li><a>${req.baseUrl}/why</a>
<li><a>${req.baseUrl}/whereami</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
});

router.get('/why', function (req, res) {
	res.send('because');
});

router.get('/whereami', function (req, res) {
  res.send(`<!DOCTYPE html>
<html>
  <head>
    <style>
      #map {
        width: 1200px;
        height: 600px;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 48.853, lng: 2.348},
          zoom: 15
        });
				var infoWindow = new google.maps.InfoWindow({map: map});

			  // Try HTML5 geolocation.
			  if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(function(position) {
			      var pos = {
			        lat: position.coords.latitude,
			        lng: position.coords.longitude
			      };

			      infoWindow.setPosition(pos);
			      infoWindow.setContent('I AM HERE');
			      map.setCenter(pos);
						map.setZoom(15);
			    }, function() {
			      handleLocationError(true, infoWindow, map.getCenter());
			    });
			  } else {
			    // Browser doesn't support Geolocation
			    handleLocationError(false, infoWindow, map.getCenter());
			  }
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASvmlEzQgG11RNNTMsW8yA0QKZMyN8e1M&callback=initMap"
        async defer></script>
  </body>
</html>
		`);
});

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
