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
        <title>My little API</title>
        <style type="text/css">
            body {
                margin: 40px;
                        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
                        color: #333;
            }
        </style>
        </head>
        <h1>...</h1>
            <li><a>${req.baseUrl}/paon</a>
            <li><a>${req.baseUrl}/Joies</a>
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


// TODO one or two routes
// be creative !

router.get('/paon', function(req, res) {
    res.send('<img src="http://www.larousse.fr/encyclopedie/data/images/1309583-Paon_faisant_la_roue.jpg">')
});

router.get('/Joies', function(req, res) {
    res.send('<iframe width="800" height="600" src="http://lesjoiesducode.fr/random"></iframe>')
});


////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
    res.send(`Hello, ${req.params.name} !`);
});


router.get('/stuff/:id', function (req, res) {
    res.status(500).json({ error: 'not implemented !' });
});
