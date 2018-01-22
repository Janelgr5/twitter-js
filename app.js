//Making an Application Instance

const express = require( 'express' );
const app = express(); // creates an instance of an express application

//express/connect
//Simple app that will log all request in the Apache combined format to STDOUT
const morgan = require('morgan');
const nunjucks = require('nunjucks'); //templating app
const routes = require('./routes');//exports index.js to app.js
//for Express Static route/middleware
const path = require('path');
const fs = require('fs');
const mime = require('mime')//must npm install first

//These lines are "boilerplate" nunjucks integration code that do not vary much from project to project.
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates
//Turn off Nunjuck's caching by turning on the noCache option
//Caching a view saves the rendered document and only re-renders it if the data has actually changed.

//Logging Middleware
app.use(morgan('combined'));
app.use('/', routes);//registers index.js as middleware

//Express Static Middleware - built in
app.use(express.static(path.join(__dirname, 'public')));
//manually-written static file middleware
// app.use(function(req, res, next){
//     var mimeType = mime.lookup(req.path);
//     fs.readFile('./public' + req.path, function(err, fileBuffer){
//         if(err) return next();
//         res.header('Content-Type', mimeType);
//         res.send(fileBuffer);
//     })
// })


// app.get("/stylesheets/style.css", function(rec, res, next){
//     //res.sendFile(“/public/stylesheets/style.css");
//     res.sendFile(path.join(__dirname + '/../../index.html'));
// });



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

//building your own (manual) static middleware function
// app.use(function(req, res, next){
//     var mimeType = mime.lookup(req.path);
//     fs.readFile('./public' + req.path, function(err, fileBuffer){
//         if (err) return next();
//         res.header('Content-Type', mimeType);
//         res.send(fileBuffer);
//     });
// });


//Using nunjucks.configure and nunjucks.render, try making a simple script that will use your template to log out
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     if(err) return console.log(err);
//     console.log(output);
// });





// app.get('/', function(req, res, next){
//     res.render('index', {title: 'Hall of Fame', people: people})
// });
/*
//Route requests in Express with app.METHOD( path, handler )

// GET method route
app.get('/', function (req, res, next) {
    // res.send('GET request to the homepage');
    
    //Sets the response HTTP status code to statusCode and send its string representation as the response body.
    // res.sendStatus('200');

    // send the rendered view to the client
    // res.render('index');

    // if a callback is specified, the rendered HTML string has to be sent explicitly
    // res.render('index', function(err, html) {
    // res.send(html);
    // });

    // pass a local variable to the view
    // res.render('user', { name: 'Tobi' }, function(err, html) {
    // ...
    // });

    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    //This function passes index.html to Express's view engine (Nunjucks). 
    //Nunjucks uses the data object to populate the "people" (variables) in the template (title and people), even looping over the people array to build three <li> tags. 
    //Express then sends the completed HTML document as a response to the browser.
    res.render( 'index', {title: 'Hall of Fame', people: people} );
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
*/

//Starting a Server
app.listen(3000, function(){
    //optional
    console.log("server listening");
})