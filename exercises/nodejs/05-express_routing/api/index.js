#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node --harmony_modules --harmony_regexps --harmony_proxies --harmony_sloppy_function --harmony_sloppy_let --harmony_unicode_regexps --harmony_reflect --harmony_destructuring --harmony_default_parameters --harmony_sharedarraybuffer --harmony_atomics --harmony_simd "$0" "$@"
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
<li><a>${req.baseUrl}/zelda/characters</a>
<li><a>${req.baseUrl}/zelda/characters/:name</a>

<script>
  document.querySelector('h1').textContent = document.title;
  Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
    el.href || (el.href = el.text);
  });
</script>
  `);
});

var characters = {
  'Link': { desc: 'Hero of Hyrule' },
  'Zelda': { desc: 'Princess of Hyrule' },
  'Ganondorf': { desc: 'The Bad Guy' },
  'Alvin': { desc: 'The Dev' }
};

router.get('/zelda/characters', (req, res) => {
  	res.send(characters);
});

router.get('/zelda/characters/:id', (req, res) => { 
	res.send(characters[req.params.id]);
});
