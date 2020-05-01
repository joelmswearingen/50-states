// server.js allows various files, libraries, etc. to be used within this file. 
// Files can be defined by pathways to locations of other files within the app or by dependencies in your base package.json file

let express = require('express') // this allows the express library to be used in this file
let bodyParser = require('body-parser')
let states_api = require('./routes/states.js')  // this requires routes/states.js file to be accessed by server.js, you need this to allow the app use this in the app below

// app config
let app = express()  // this defines the web app

app.use(bodyParser.json())

app.use('/api', states_api)  // this tells our app to use the routes/states.js file we have allowed for use in this file

// error handlers
// 404 not found error
app.use(function(req, res, next){
    res.status(404).send('Not Found')
})

// server error
app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Server Error')
})

// starts server running, app.listen(process.env.PORT tells us what port to run if specified, otherwise use 3000
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port )  // this fuction gives us feedback to know on which port the server is running
})

