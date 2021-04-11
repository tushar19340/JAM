const express = require("express");
const app = express();
const {spawn} = require('child_process');
// const bodyParser 	= require("body-parser");

app.set('view engine', "ejs");
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    var dataToSend;
    // const python = spawn('python', ['script.py']);
    // python.stdout.on('data', function (data) {
    //     console.log('Pipe data from python script ...');
    //     dataToSend = data.toString();
    //     console.log(dataToSend);
    // });
    // python.on('close', (code) => {
    //     console.log(`child process close all stdio with code ${code}`);
    //     // send data to browser
    //     console.log(dataToSend)
    // });
    res.render("index");

});

app.get("/collab", (req, res) => {
    res.render("collab");
});



app.listen(process.env.PORT || 3000, () => {
    console.log("The server has started on port: 3000");
});