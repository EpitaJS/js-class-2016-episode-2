 'use strict';

// http://offirmo.net/wiki/index.php?title=Express.js
// http://expressjs.com/4x/api.html

const _ = require('lodash');
const express = require('express');


/////////////////////////////////////////////

const router = module.exports = new express.Router();

 let users = [];

/////////////////////////////////////////////

router.get('/', (req, res) => {
	res.send(`
<!DOCTYPE html>
<head>
	<title>Node.js server</title>
	<style type="text/css">
		body {
			margin: 40px;
			font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
			color: #333;
		}
	</style>
</head>

<h1>...</h1>
<li><a>${ req.baseUrl }/hello/world</a>
<li><a>${ req.baseUrl }/stuff/42</a>
<li><a>${ req.baseUrl }/users</a>
<li><a>${ req.baseUrl }/users/add</a>
<li><a>${ req.baseUrl }/users/login</a>

<script>
	document.querySelector('h1').textContent = document.title;
	Array.prototype.forEach.call(document.querySelectorAll('a'), function(el) {
		el.href || (el.href = el.text);
	});
</script>
`);
});

function password_hash(password)
{
    return password; //Use sha256 or other
}

function password_verify(password, passwordHash)
{
    return password == passwordHash; //Same as above
}

 router.get('/users/', function (req, res) {
     res.json(users.map(function(user)
     {
         return {
             username: user.username
         };
     }));
 });

 // should be post, but
 router.get('/users/add', function (req, res) {

     if (req.query.username == null || req.query.username.length < 3) {
         res.status(400).json({
             error: 'Username must be at least 3 characters'
         });
         return;
     }
     if (users.some(function(user)
         {
             return user.username.toLowerCase() ==  req.query.username.toLowerCase();
         })) {
         res.status(400).json({
             error: 'Username already exists'
         });
         return;
     }
     if (req.query.password == null || req.query.password.length < 5) {
         res.status(400).json({
             error: 'Password must be at least 5 characters'
         });
         return;
     }
     users.push({
         username: req.query.username,
         password: password_hash(req.query.password)
     });
     res.json({error: null});
 });

 // should be post, but
 router.get('/users/login', function (req, res) {

     if (req.query.username == null) {
         res.status(400).json({
             error: 'Username must be present'
         });
         return;
     }
     if (req.query.password == null) {
         res.status(400).json({
             error: 'Password must be present'
         });
         return;
     }
     let user = users.find(function(user)
     {
         return user.username.toLowerCase() ==  req.query.username.toLowerCase()
            && password_verify(req.query.password, user.password);
     });
     if (user == null) {
         res.status(401).json({
             error: 'Bad username / password'
         });
         return;
     }
     res.json({error: null});
 });

////////////////// examples //////////////

router.get('/hello/:name', function (req, res) {
  res.send(`Hello, ${req.params.name} !`);
});


router.get('/stuff/:id', function (req, res) {

  res.status(500).json({ error: 'not implemented !' });

  /*
   res.type('json').send({
   id: req.id
   });
   */
});
