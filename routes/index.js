'use strict';
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

//Router: gets all of the tweets for all users
router.get('/', function (req, res) {
  let allTheTweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: allTheTweets } );
});

//Router: gets all of th tweets for a single user
router.get('/users/:name', function(req, res, next){
  var tweetsForName = tweetBank.find({name: req.params.name});
  res.render( 'index', { title: 'Twitter.js', tweets: tweetsForName } );
});

//Router: gets a single tweet from a single user
router.get('/tweets/:id', function(req, res, next){
  var tweetsWithID = tweetBank.find({id: +req.params.id});
  //+ coerces id from a string to a number
  res.render('index', {title: 'Twitter.js', tweets: tweetsWithID});
})
module.exports = router;