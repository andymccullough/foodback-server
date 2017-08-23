var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Allow CORS
app.use(cors());



const menusArray = [{
    id: "1",
    title: "My Menu",
    likes: 0
}];




app.get('/menu', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(menusArray, null, 3));
})

app.post('/menu', function (req, res) {
    console.log(req.body.title);
    res.send(JSON.stringify(menusArray, null, 3));
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})