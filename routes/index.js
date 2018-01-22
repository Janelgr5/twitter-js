'use strict';
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = function(io){
  //Router: gets all of the tweets for all users
  router.get('/', function (req, res) {
    let allTheTweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: allTheTweets, showForm: true } );
    //showForm renders the showForm code in index.html
  });

  //Router: gets all of th tweets for a single user
  router.get('/users/:name', function(req, res, next){
    var tweetsForName = tweetBank.find({name: req.params.name});
    res.render( 'index', { title: 'Twitter.js', tweets: tweetsForName, showForm: true, name: req.params.name } );
  });

  //Router: gets a single tweet from a single user
  router.get('/tweets/:id', function(req, res, next){
    var tweetsWithID = tweetBank.find({id: +req.params.id});
    //+ coerces id from a string to a number
    res.render('index', {title: 'Twitter.js', tweets: tweetsWithID});
  });

  //Router: post a tweet
  router.post('/tweets', function(req, res, next){
    tweetBank.add(req.body.name, req.body.text);
    res.redirect('/');
  });
  return router;
};

//Somewhere in your routes you will want to emit the 'new_tweet' event.
//io.sockets.emit('newTweet', { /* tweet info */ });
// module.exports = router;