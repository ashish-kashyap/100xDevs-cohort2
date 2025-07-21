const express = require('express')
const bodyParser = require("body-parser");
const app = express()   // calling express() function that will give app object
const port = process.env.PORT || 3000

app.use(bodyParser.json());

/*app.get("/route-handler", function(req, res) {
    // headers, body, query param
    // do machine learning model
    res.json({
        name: "ashish",
        age: 21
    })
})*/

/*app.get("/", (req, res) => {
    res.send('<b> hi there! This is Ashish <b>')
})*/

app.post('/backend-api/conversation', function(req, res) {
    const message = req.query.message;
    console.log(message)
    res.json({
        output : "2 + 2 = 4"
    })
})

/*app.post('/conversations', (req, res) => {
    console.log(req.body)
    res.send({
        msg : "2 + 2 = 4"
    })
})*/
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// creaste a http server in C from scratch
// create a todo application where you store data in a file
// create a rust/golang/java http server

