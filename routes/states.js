// routes match the requests coming from the server with the code that runs to return the response

let express = require('express') // this allows the express library to be used in this file
let States = require('../models').States  // this allows the States export from models/states.js to be used in this file

let router = express.Router()  // this call creates the object which understands how to match paths and requests with the fuction(s) that can respond to the requests

// this route fetches data from api/states
router.get('/states', function(req, res, next) {
    States.findAll({order: ['name']})  // finds all states in the db
    .then( states => {
        return res.json(states)  // returns a json response with all states
    })
    .catch( err => next(err) )  // unexpected error handling, as needed, pass to error handler
})

// this route appends 'state visited' data to the corresponding state
router.patch('/state/:name', function(req, res, next){
    States.update({ visited: req.body.visited }, {where: {  // Vue.app send the visited boolean to...
            name: req.params.name  // the database using params
        }
    })
    .then( rows => {
        if (rows) {  // modify the row
            return res.send('ok')
        } else {
            return res.status(404).send()  // if no rows are modified, return 404 error
        }
    })
    .catch( err => next(err) )  // unexpected error handling, as needed, pass to error handler
})

module.exports = router  // exports router object so that other files can access responses