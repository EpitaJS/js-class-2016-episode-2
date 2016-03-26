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
<li><a>${req.baseUrl}/hello/name</a>
<li><a>${req.baseUrl}/psg</a>
<li><a>${req.baseUrl}/player</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
	`);
  // TODO_ a small page listing your endpoints
  // cf. js-class-2016-episode-2\src\server\common\meta-routes.js
});



// TODO_ one or two routes
// be creative !

router.get('/psg', function(req, res) {
    res.redirect('http://www.psg.fr/fr/Accueil/0/Accueil');
});

router.get('/player/:id', function(req, res) {
    var player_nb = Number(req.params.id);
    switch (player_nb) {
        case 1 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/2366/Douchez-Nicolas');
            break;
        case 2 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/2739/Silva-Thiago');
            break;
        case 5 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/3180/Marquinhos');
            break;
        case 6 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/2735/Verratti-Marco');
            break;
        case 7 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/3120/Lucas');
            break;
        case 8 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/1825/Motta-Thiago');
            break;
        case 9 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/3178/Cavani-Edinson');
            break;
        case 10 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/2737/Ibrahimovic-Zlatan');
            break;
        case 11 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/3766/Di-Maria-Angel');
            break;
        case 14 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/2369/Matuidi-Blaise');
            break;
        case 16 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/3715/Trapp-Kevin');
            break;
        case 19 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/3375/Aurier-Serge');
            break;
        case 27 :
            res.redirect('http://www.psg.fr/fr/Equipe-Pro/300002/Fiche-Joueur/2374/Pastore-Javier');
            break;
        default :
            res.status(500).send('no player');
            break;
    }});


////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
    console.log(req.params.name);
  res.send(`Hello, ${req.params.name} !`);
});


router.get('/stuff/:id', function (req, res) {

   // res.status(500).json({ error: 'not implemented !' })
   res.type('json').send({
   id: req.params.id
   });
});
