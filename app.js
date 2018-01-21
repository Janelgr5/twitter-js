//Making an Application Instance

const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/', (req, res) => res.send('Hello World!'))




//Starting a Server
app.listen(3000, function(){
    //optional
    console.log("server listening");
})