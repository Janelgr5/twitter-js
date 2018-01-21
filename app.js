//Making an Application Instance

const express = require( 'express' );
//express/connect
//Simple app that will log all request in the Apache combined format to STDOUT
const morgan = require('morgan');

const app = express(); // creates an instance of an express application

//Here is a simple example of a middleware function called “myLogger”. 
//This function just prints “LOGGED” when a request to the app passes through it. 
//The middleware function is assigned to a variable named myLogger.
// var myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
// }

//To load the middleware function, call app.use(), specifying the middleware function. 
//registers some function to run for each incoming request.
//For example, the following code loads the myLogger middleware function before the route to the root path (/).
// app.use(myLogger);
// app.use('/special/', myLogger);
app.use(morgan('combined'))


// GET method route
app.get('/', function (req, res, next) {
    // res.send('GET request to the homepage');
    //Sets the response HTTP status code to statusCode and send its string representation as the response body.
    res.sendStatus('200');
    next();
});

//PUT method route
app.put('/', function (req, res) {
    res.send('PUT request to homepage');
    next();
});

//DELETE method route
app.delete('/', function (req, res) {
    res.send('DELETE request to homepage');
    next();
});
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
    next();
})


//Starting a Server
app.listen(3000, function(){
    //optional
    console.log("server listening");
})