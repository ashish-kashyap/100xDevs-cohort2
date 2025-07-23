const express = require("express");
const app = express();

const users = [{
    name: "John Doe",
    kidneys: [{
        healthy: false,
    }]
}];

app.use(express.json()); //to parse JSON body

//query parameter -> we send during get request
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    //filter
    const numberOfHealthyKidneys = users[0].kidneys.filter(kidney => kidney.healthy).length;
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res) {
    if(!isThereAtleastOneUnhealthyKidney()) {
        return res.status(411).json({
            msg: "No unhealthy kidneys found!"
        });
    }

    for(let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true; //set all kidneys to healthy
    }
    res.json({
        msg: "All kidneys are now healthy!"
    });   //tell the user that everything is done, send the data => otherwise it would hung
})

//removing all the unhealthy kidneys
app.delete("/", function(req, res) {
    //if you have no unhealthy kidneys => you should return 411 status code
    // only if atleast 1 unhealthy kidney is there do this,else return 411
    if(!isThereAtleastOneUnhealthyKidney()) {
        return res.status(411).json({
            msg: "No unhealthy kidneys found!"
        });
    }

    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push(users[0].kidneys[i]); //keep only healthy kidneys
        }
    }
    users[0].kidneys = newKidneys; //update the kidneys array
    res.json({
        msg: "Successfully Done!"
    })
})


function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidneys = false;
    for(let i=0; i<users[0].length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidneys = true; //found atleast one unhealthy kidney
            break;
        }
    }
}
 

app.listen(3000);