const auth = require(`./auth.js`);
var foursquare = (require('foursquarevenues'))(auth.clientId, auth.clientSecret);
// content of index.js
const http = require('http')
const port = 3000
const request = require('request');

// require your modules
const express = require('express')
const bodyParser = require('body-parser')

// create instance of express
let app = express()
app.get(`/`, (req, res) => {
  res.end(`sup bitches`)
})
// let app use body-parser
// this one is parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// this one is parsing application/json
app.use(bodyParser.json())

// // POST endpoint /form
app.post('/form', (req, res) => {
  //   // Callback

  console.log(req.body);

  foursquare.exploreVenues(req.body, function (error, venues) {
    if (!error) {
      res.send(venues);
    } else {
      console.log(error)

    }
  });




})
// listen on port 3000
app.listen(3000, () => {
  console.log('Running on *:3000')
})