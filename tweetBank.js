//This module will be responsible for holding all of the tweets and giving us methods for interacting with them.
const _ = require('lodash');
//This will store the tweets.
let data = [];
//define tweetBank functions
function add (name, content) {
    data.push({ name: name, content: content, id: data.length });
    //each time we add, the id will increase by one;
  }
  
  function list () {
    //This method is like _.clone except that it recursively clones value.
    //Arguments: value (*): The value to recursively clone.
    //Returns (*): Returns the deep cloned value.
    return _.cloneDeep(data);
  }
  
  function find (properties) {
    //_.filter(collection, [predicate=_.identity])
    //Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
    //Note: Unlike _.remove, this method returns a new array.
    //Arguments: collection (Array|Object): The collection to iterate over, [predicate=_.identity] (Function): The function invoked per iteration.
    //Returns: (Array): Returns the new filtered array.
    return _.cloneDeep(_.filter(data, properties));
  }
  
  module.exports = { add: add, list: list, find: find };

  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };
  
  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };
  
  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }

//test module
// console.log(data);