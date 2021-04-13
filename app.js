const express = require("express");
const app = express();
const {spawn} = require('child_process');
// const bodyParser 	= require("body-parser");

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', "ejs");
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index");

});

app.post("/run-script", (req, res) => {
    
    res.send(dataToSend);
})

app.get("/collab", (req, res) => {
    res.render("collab");
});

io.on("connection", (socket) => {
    console.log("A user is connected: ");
    socket.on("download", () => {
        setTimeout(runScript, 5000);

        // console.log("request recieved");

    });
})

function runScript(){
    console.log("I am here");
    let dataToSend;
    const python = spawn('python', ['script.py']);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(dataToSend);
    });
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
    });
}

server.listen(process.env.PORT || 3000, () => {
    console.log("The server has started on port: 3000");
});