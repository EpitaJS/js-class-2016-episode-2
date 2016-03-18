#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node --harmony_modules --harmony_regexps --harmony_proxies --harmony_sloppy_function --harmony_sloppy_let --harmony_unicode_regexps --harmony_reflect --harmony_destructuring --harmony_default_parameters --harmony_sharedarraybuffer --harmony_atomics --harmony_simd "$0" "$@"
'use strict';

/**
 * FETCHING AN API
 *
 * Fetch the StarWars API  http://swapi.co/
 *
 */


const _ = require('lodash');
const inquirer = require('inquirer'); // https://www.npmjs.com/package/inquirer
const fetch = require('node-fetch'); // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const ora = require('ora'); // https://github.com/sindresorhus/ora
const prettyjson = require('prettyjson');


// admire how it's readbale :
askUser()
.then(fetchData)
.then(displayResults)
.catch((err) => {
  console.error('! Something bad happened :');
  console.error(err);
});


function askUser() {
  return new Promise(function (resolve, reject) {
    inquirer.prompt([
      {
        name: 'dataType',
        type: 'list',
        message: 'What do you want to know about ?',
        default: 'people',
        choices: ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
      },
      {
        name: 'id',
        message: 'Which id ? (1-n)',
        default: '9'
      }
    ], function (choices) {
      console.log(choices);
      return Promise.resolve("Success");
      // TODO resolve the promise !!!
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    });
  });
}

function fetchData(choices) {
  console.log('fetchData input :', choices);

  const url = 'http://swapi.co/api/' + choices.dataType + '/' + choices.id;
  console.log(url);

  const spinner = ora('Fetching StarWars API...');
  spinner.start();

  // TODO now use the fetch API :
  // https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#Checking_that_the_fetch_was_successful
  fetch(url).then(function(response) {
  if(response.ok) {
    response.blob().then(function(myBlob) {
      var objectURL = URL.createObjectURL(myBlob);
      return Promise.resolve("Success :: " + objectURL);
    });
  } else {
    console.log('Network response was not ok.');
  }
  }).catch(function(error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
  });

  return Promise.reject(new Error('fetchData not implemented !'));
}

function displayResults(data) {
  console.log('result :\n', prettyjson.render(data));
}
