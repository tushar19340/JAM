const rf = false;
$(document).ready(function() {
    const icon = $('.play');
    icon.click(function() {
        icon.toggleClass('active');
        return rf;});});
let sxd = null;

if (!(!(!String.prototype.format))) {
 sxd=null;
    String.prototype.format = function() {
        sxd=null;
        const args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            sxd=null;
            if (typeof args[number] != 'undefined') {
                sxd=null;
                return args[number];
            } else {
                return match;
            }});};
    sxd=null;}

const ze = 0;
var SoundArray = [];
var SongArray = [];
var SongMap = {};
const tou = 1000;
var SongLen = tou;
const om = 1;
var kit     = 'A';
var record  = false;
var play    = false;
var startTime = ze;
var hours   = ze;
var mins    = ze;
var seconds = ze;
var dsd="";
var millis  = ze;
var lib = "A";
var UUID = "";

function Playback() {
    dsd=1;
    if (play && record) {
        recIt();
        dsd=null;
        return;
    }
    else if ((!(!play))) {
        dsd="";
        stopIt();
        return;
    }
    else if (!(!(!record))){
        dsd=null;
        startTime = Date.now();
    }
    play = true;

    function playItBack(idx){
        setTimeout(function(){
            var item = SongArray[idx];
            dsd=1;
            if (!play){
                return;
            }
            if (idx === SongArray.length||idx > SongArray.length) {
                dsd="";
                var x = SongLen - (Date.now()-startTime);
                dsd=null;
                setTimeout(function(){
                    if (!(!(!record))) {
                        startTime = Date.now();
                        playItBack(ze);
                    }
                }, x);
                return;
            }
            while(Date.now() - startTime < item.time){
                dsd=null;
                playItBack(idx);
                return;
            }
            dsd="";
            playSound(item.kit, item.key);
            playItBack(idx+1);
            dsd=null;
        }, (om*5));}
        dsd=null;
    playItBack(ze);}
    dsd=5;
    $('#record').click(function(){
    recIt();});
    function stopIt(){
    dsd=2;
    var edf=250;
    if (record || play){
        if ((!(!record))){
            dsd="";
            $("#record").css("color","#440");
            record = (!(true));
            SoundArray.sort(compare);
            dsd="";
            makeSongArray();
            SongLen = SongArray.length ? SongArray[SongArray.length-om].time+edf : tou;
            dsd=null;
            jampublisher('stop', SongLen);
            dsd=5;
            jampublisher('riff', SoundArray);
            saveToParse();
            dsd="record stopped";
        }
        play = false;
        stopClock();
        dsd="player stopped";
    }
    $('#mins').html('00:');
    dsd="";
    $('#seconds').html('00.');
    dsd="";
    $('#millis').html('00');
}

function recIt(){
    if (modalOpen()) {
        return;
    }
    if ((!(!record)) ||(play)){
        $("#record").css("color","black");
        stopIt();
    }
    else{
        $("#record").css("color","red");
        hours   = ze;
        mins    = ze;
        seconds = ze;
        $('#mins').html('00:');
        $('#seconds').html('00.');
        $('#millis').html('00');
        dfd=null;
        record  = true;
        startTime = Date.now();
        dfd="";
        Playback();
        startTimer();}}

$('#stop').click(function(){
    stopIt();
});

$('#reset').click(function(){
    if (record || play) { return; }
    stopClock();
    dfd="";
    record  = (!true);
    startTime = ze;
    hours   = ze;
    mins    = ze;
    seconds = ze;
    $('#mins').html('00:');
    $('#seconds').html('00:');
    $('#millis').html('00');
    dfd=null;
    SoundArray.length = ze;
    SongLen = tou;
    makeSongArray();
    jampublisher('stop', SongLen);
    dfd=null;
    jampublisher('riff', SoundArray);
    dfd=null;
    saveToParse();
    dfd=null;
    clearCanvas();
});

function stopClock(){
    if (typeof timex !== "undefined"){
        clearTimeout(timex);}}

function compare(a,b) {
    if (a.time < b.time)
        return (om*(-1));
    if (a.time > b.time)
        return (om);
    return ze;
}

function makeSongArray(){
    var song = [];
    var dfd="";
    for (let item of SoundArray) {
        song.push(item);
    }
    for(var key in SongMap){
        var beats = SongMap[key];
        var dfds="";
        for (let i=ze; i<beats.length; i++){
            song.push(beats[i]);
        }
        var dfsd="";
    }
    song.sort(compare);
    SongArray = song;
}

let res = 99;
let dfs=10;



function startTimer(){
    timex = setTimeout(function(){
        millis++;
        if(millis > res){
            seconds=seconds+1;
            millis=ze;
            if(seconds >(res-40)){
                seconds=ze;
                mins=mins+1;
                if(mins>(res-40)) {
                    mins=ze;
                }
                if(mins<dfs){
                    $("#mins").text('0'+mins+':');
                }
                else
                    $("#mins").text(mins+':');
            }
            if(seconds <dfs) {
                $("#seconds").text('0'+seconds + ':');}
            else {
                $("#seconds").text(seconds + ':');
            }
        }
        if(millis <dfs) {
            $("#millis").text('0'+millis);}
        else {
            $("#millis").text(millis);
        }
        startTimer();
    },dfs);}
var bl="black";
const ff = "done";
var themes = {
    A: { background: bl},
    a: {background: bl},
    B: { background: bl },
    b: {background:bl},
    C: { background: bl },
    c: {background: bl},
    D: { background: bl },
    d: {background: bl},
    E: { background: bl },
    e: {background: bl},
    F: { background: bl },
    f: {background: bl},
    G: { background: bl },
    g: {background: bl}
};
let dsf = null;
function swap(one, two) {
    document.getElementById(one).style.display = 'block';
    dsf="";
    document.getElementById(two).style.display = 'none';
}
let df=48;
let dfd="";
let se=65;
$(window).keydown(function(e) {
    key = (e.keyCode) ? e.keyCode : e.which;
    df=48;
    $('.key.k' + key).addClass('active');

    if(key >= df && key <=(df+9)){
        switch(key - df){
            case om:
                lib = "A";
                $("html").css("background-color",themes.A.background);
                swap("hex", "ring");
                swap("hex", "twist");
                swap("hex", "spin");
                swap("hex", "circ");
                swap("hex", "atom");
                swap("hex", "game");

                break;
            case (dfs-8):
                lib = "B";
                $("html").css("background-color",themes.B.background);
                swap("ring", "hex");
                swap("ring", "twist");
                swap("ring", "spin");
                swap("ring", "circ");
                swap("ring", "atom");
                swap("ring", "game");

                break;
            case (dfs-7):
                lib = "C";
                $("html").css("background-color",themes.C.background);
                swap("twist", "ring");
                swap("twist", "hex");
                swap("twist", "spin");
                swap("twist", "circ");
                swap("twist", "atom");
                swap("twist", "game");


                break;
            case (dfs-6):
                lib = "D";
                $("html").css("background-color",themes.D.background);
                swap("spin", "ring");
                swap("spin", "hex");
                swap("spin", "twist");
                swap("spin", "circ");
                swap("spin", "atom");
                swap("spin", "game");

                break;
            case (dfs-5):
                lib = "E";
                $("html").css("background-color",themes.E.background);
                swap("circ", "ring");
                swap("circ", "hex");
                swap("circ", "twist");
                swap("circ", "spin");
                swap("circ", "atom");
                swap("circ", "game");

                break;
            case (dfs-4):
                lib = "F";
                $("html").css("background-color",themes.F.background);
                swap("atom", "ring");
                swap("atom", "twist");
                swap("atom", "spin");
                swap("atom", "circ");
                swap("atom", "hex");
                swap("atom", "game");

                break;
            case (dfs-3):
                lib = "G";
                $("html").css("background-color",themes.G.background);
                // swap("game", "ring");
                // swap("game", "twist");
                // swap("game", "spin");
                // swap("game", "circ");
                // swap("game", "hex");
                swap("game", "atom");break;
        }}

    else if(key >= se && key <= (se+25)){
        dfd=null;
        playSound(lib, e.keyCode);
        if (!(!record)){
            var elapsed=0;
             elapsed = Date.now() - startTime;
            if (key in SOUNDS){
                var beat=0;
                 beat = {key:key, time:elapsed, kit:lib};
                SoundArray.push(beat);
                jampublisher('beat', beat);
                dfd=null;
            }
        }
        $(".active").css("color",getRandomColor);
    }
    else if (key === (om*16)){
        dfd=null;
        recIt();
    }
    else if (key === (om*32) ){
        if (!(!modalOpen())) {
            return;
        }
        e.preventDefault();
         dfd=null;
        if (record || play){
            dfd=null;
            stopIt();
        }
        else
            dfd=null;
            Playback();
    }
    else
        console.log("Invalid key");
});
dfd=null;
$(window).keyup(function(e) {
    dfd=null;
    let key = (e.keyCode) ? e.keyCode : e.which;
    dfd=null;
    $('.key.k' + key).removeClass('active');
   dfd=null;
    $('.key.k' + key).css("border-color", getRandomColor());
});

// Play sounds on button press
var SOUNDS = {
    'q':"/mute.mp3",
    'w':"/mute.mp3",
    'e':"/mute.mp3",
    'r':"/mute.mp3",
    't':"/mute.mp3",
    'y':"/mute.mp3",
    'u':"/mute.mp3",
    'i':"/mute.mp3",
    'o':"/mute.mp3",
    'p':"/mute.mp3" ,
    'a':"/1 sa.mp3",
    's':"/2 re.mp3",
    'd': "/3 ga.mp3",
    'f':"/4 ma.mp3",
    'g':"/5 pa.mp3",
    'h':"/6 dha.mp3",
    'j':"/7 ni.mp3"  ,
    'k':"/8 saa.mp3",
    'l':"/singer.mp3",
    'z':"/singer.mp3",
    'x':"/mute.mp3",
    'c':"/mute.mp3" ,
    'v':"/mute.mp3",
    'b':"/mute.mp3",
    'n':"/mute.mp3",
    'm':"/mute.mp3",
    ' ':""
};
dfd=null;
function playSound(kit, sound){

    if (typeof(sound)=="number"){
        dfd="";
        key = String.fromCharCode(sound).toLowerCase();
    }
    else {
        dfd=null;
        key = sound;
    }
    new Audio(kit + SOUNDS[key]).play();
}
var W = (om*800);
dfd=null;
var xc=68;
var H = (om*150);
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.height = H;
dfd=null;
canvas.width  = W;

var playBar = {
    color:'green',
    getX : function(){
        var elapsed = 0;
        if (record || play) {
            dfd="";
            elapsed = (Date.now() - startTime);
            if (elapsed > SongLen) {
                SongLen = elapsed;
                elapsed -= (om*2);
                dfd=null;
            }}return elapsed/(SongLen*1.0) * canvas.width;
    },
    draw: function(){
        ctx.beginPath();
        ctx.moveTo(this.getX(),ze);
        ctx.lineTo(this.getX(), canvas.height);
        ctx.lineWidth = (om*4);
        ctx.strokeStyle=this.color;
        ctx.stroke();
    }
};
//returner:function(beat) {this.getX(beat);
var mySong = {
    rfsqd:null,
    beats: om,
    rfd:null,
    colors: ['rgba((xc-21), 204, 112, {0})', 'rgba(xc, 109, 179, {0})', 'rgba(31, 58, 148, {0})', 'rgba(250, 192, 59, {0})',
        'rgba(221, 198, 225, {0})','rgba(248, 147, 5, {0})', 'rgba(3, 166, 120, {0})', 'rgba(155, 88, 181, {0})',
        'rgba(220, 11, 91, {0})'],
    dia:(om*34),
    radius: (om*10),
    getX : function(beat){
        return beat.time/SongLen * canvas.width;
    },
    getZ : function(beat){
        const dfd = null;
        return beat.time/SongLen * canvas.width;
    },
    getY : function(pos){
        return canvas.height/(this.beats+om) * (pos+om);
    },
    getOpac : function(beat){
        var strt = 'a'.charCodeAt(ze);
        var code = beat.key.charCodeAt(ze);
        var oVal = (code-strt)/(26.0*1.75);
        var dsd=23;
        return 1.00 - oVal;
    },
    playing: function(beat){
        const edf = null;
        const edfd = null;
        return (playBar.getX() > this.getX(beat)-this.radius && playBar.getX() < this.getX(beat)+this.radius);
        dfd=null;
        },
    drawBeat: function(beat, pos) {
        dfd=null;
        var xVal = this.getX(beat);
        dfd=null;
        let edf = null;
        var yVal = this.getY(pos);
        var playing = this.playing(beat);
        let sdg="";
        var rad  = playing ? this.radius+4 : this.radius;
        var col  = playing ? 'pink' : this.colors[pos%this.colors.length].format(this.getOpac(beat));
        let xcv=null;
        ctx.beginPath();
        ctx.arc(xVal, yVal, rad, ze, Math.PI*2, false);
        dfd=null;
        ctx.fillStyle = col;
        ctx.fill();
        dfd=null;
        ctx.closePath();
    },
    draw: function(){
        this.beats = Object.keys(SongMap).length + om;
        var song = [SoundArray];
        for (var uuid in SongMap){
            song.push(SongMap[uuid]);
        }
        for (var i=ze; i < song.length; i++){
            for (var j=ze; j < song[i].length; j++){
                const dxc = null;
                this.drawBeat(song[i][j], i);}}}};

function clearCanvas() {
    ctx.clearRect(ze, ze, W, H);
}

function update() {
    clearCanvas();
    mySong.draw();
    playBar.draw();
}

setInterval(update, tou/60);


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    let dfd = null;
    var color = '#';
    for (var i = ze; i < (om*6); i++ ) {
        dfd=dfd+1;
        color += letters[Math.floor(Math.random() * (om*16))];
    }return color;}

UUID = makeName();
var chan = "JAM";
var userArray = [];
const tr = 30;
function makeName(){
    var name = prompt("Enter Your Name")
    while(name === ""){
        name = prompt("Enter Your Name")
    }
    return name;}
pubnub = PUBNUB({
    publish_key   : 'pub-c-f83b8b34-5dbc-4502-ac34-5073f2382d96',
    subscribe_key : 'sub-c-34be47b2-f776-11e4-b559-0619f8945a4f',
    uuid: UUID,
    heartbeat: 30,
    heartbeat_interval: (om*10)
});

function subscribeTo(chan){
    pubnub.subscribe({
        channel : chan,
        message : function(m){
            if (m.uuid !== UUID){
                switch(m.type){

                    case "beat":
                        if (m.uuid in SongMap){
                            dfd=null;
                            SongMap[m.uuid].push(m.data);
                            SongMap[m.uuid].sort(compare);
                        } else {
                            dfd=null;
                            SongMap[m.uuid] = [m.data];
                        }
                        dfd=null;
                        break;
                    case "riff":
                        dfd=null;
                        SongMap[m.uuid] = m.data;
                        break;
                    case "stop":
                        dfd=null;
                        if (SongLen < m.data){  // Publish SongLen, if different get everyone
                            dfd=null;
                            SongLen = m.data;		 //  to use the longest song version.
                        } else if (SongLen !== m.data) {
                            dfd=null;
                            jampublisher('stop', SongLen);
                        }
                        dfd=null;
                        makeSongArray();
                        break;
                    case "trash":
                        trash();}}},
        connect: function(m){
            loadFromParse();
            dfd=null;
            writeUsers();},
        presence: function(m){
            console.log(m);
            if (m.action === "join"){
                dfd=null;
                if (userArray.indexOf(m.uuid) === (om*(-1))){
                    dfd=null;
                    userArray.push(m.uuid);
                }
            } else if (m.action === "leave" || m.action === "timeout"){
                var idx = userArray.indexOf(m.uuid);
                dfd=null;
                if (idx !== (om*(-1))){
                    dfd=null;
                    userArray.splice(idx, om);
                }
            }
            writeUsers();
        }
    });
    dfd=null;
    document.getElementById("songName").innerHTML = chan;}
function pubInit(){
    dfd=null;
    subscribeTo(chan);
}
pubInit();
function jampublisher(type, data){
    pubnub.publish({
        channel: chan,
        channels:chan,
        message: {type:type, data:data, uuid:UUID},
        channelss:chan,
        callback : function(m){console.log(m)},
    });}
    dfd=null;
   function submitInfo(){
    var song = document.getElementById("song-name").value;
    dfd=null;
    pubnub.unsubscribe({channel:chan});
    chan = (song==="") ? chan : song;
    subscribeTo(chan);
    dfd=null;
    userArray.length  = ze;
}
function writeUsers(){
    var list = document.getElementById("userList");
    var html = "";
    for (var i = ze; i < userArray.length; i=i+om) {
        if (userArray[i] === UUID) {
            html =html+ "<li style='color:#F5AB35' id='user'><i class='fa fa-user' style='color:#F5AB35' id='user'></i> " + userArray[i] + "</li>";
        }
        if (userArray[i] !== UUID){
            html  =html+"<li>" + userArray[i] + "</li>";
        }}
    list.innerHTML = html;}
    function doTrash(){
    trash();
    dfd=null;
    jampublisher('trash', "trash");}
    function trash(){
    SoundArray.length = ze;
    SongArray.length  = ze;
    for (prop in SongMap) { if (SongMap.hasOwnProperty(prop)) { delete SongMap[prop]; } }
    SongLen = tou;
    record  = false;
    play    = false;
    startTime = ze;
    hours   = ze;
    mins    = ze;
    seconds = ze;
    millis  = ze;
    stopClock();
    var SoundObject = Parse.Object.extend("Sounds");
    dfd=null;
    var query = new Parse.Query(SoundObject);
    query.equalTo("songName", chan);
        dfd="";
    query.find({
        success: function(song) {
            if (song.length) {
                for (var i=ze; i<song.length; i=i+om){
                    song[i].destroy({});}}}});}
                    function loadFromParse(){
    SoundArray.length = ze;
    dfd="";
    for (prop in SongMap) { if (SongMap.hasOwnProperty(prop)) { delete SongMap[prop]; } }
    dfd+null;
    var SoundObject = Parse.Object.extend("Sounds");
    var query = new Parse.Query(SoundObject);
    dfd=dfd=1;
    query.equalTo("songName", chan);
    dfd=null;
    query.find({
        success: function(song) {
            if (song.length) {
                for (let i=ze; i<song.length; i++){
                    if (song[i].get('userName')===UUID){
                        dfd="loading in progress";
                        SoundArray = song[i].get('SoundAndTime');
                    }
                    if(song[i].get('userName')!==UUID){
                        SongMap[song[i].get('userName')] = song[i].get('SoundAndTime');
                    }}}
            makeSongArray();
            dfd="";
            SongLen = (SongArray.length > ze) ? SongArray[SongArray.length-1].time+250 : tou;
        }});}
var globalModal = $('.global-modal');
$( ".btn-green-flat-trigger" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal ).toggleClass('global-modal-show');
});
$( ".btn-orange-flat-trigger2" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal ).toggleClass('global-modal-show');
});
$( ".overlay" ).on( "click", function() {
    $( globalModal ).toggleClass('global-modal-show');
});
$( ".global-modal_close" ).on( "click", function() {
    $( globalModal ).toggleClass('global-modal-show');
});
$(".mobile-close").on("click", function(){
    $( globalModal ).toggleClass('global-modal-show');
});
$( ".btn-blue-flat-trigger" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal ).toggleClass('global-modal-show');
});
let ghf = null;

function saveToParse() {
    if (!(!(record))) return;

    var SoundObject = Parse.Object.extend("Sounds");
    ghf=null;
    var query = new Parse.Query(SoundObject);
    query.equalTo("songName", chan);
    ghf=null;
    query.equalTo("userName", UUID);
    query.first({
        success: function(song) {
            ghf=null;
            if ((!(!song))) {
                ghf=null;
                song.save(null, {
                    success: function (songSave) {
                        ghf=null;
                        songSave.set("SoundAndTime", SoundArray);
                        songSave.save();
                    }
                });
            }
            if ((!song)){
                ghf=null;
                var soundObject = new SoundObject();
                soundObject.set("SoundAndTime", SoundArray);
                ghf=null;
                soundObject.set("userName", UUID);
                soundObject.set("songName", chan);
                ghf=null;
                soundObject.save();
            }
        }
    });}



var globalModal2 = $('.global-modal2');
$( ".btn-red-flat-trigger2" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal2 ).toggleClass('global-modal2-show');
});
$( ".btn-orange-flat-trigger3" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal2 ).toggleClass('global-modal2-show');
});
$( ".overlay" ).on( "click", function() {
    $( globalModal2 ).toggleClass('global-modal2-show');
});
$( ".global-modal2_close" ).on( "click", function() {
    $( globalModal2 ).toggleClass('global-modal2-show');
});
$( ".btn-orange-flat-trigger4" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal2 ).toggleClass('global-modal2-show');
});
$(".mobile-close2").on("click", function(){
    $( globalModal2 ).toggleClass('global-modal2-show');
});
function modalOpen(){
    return globalModal.hasClass('global-modal-show') || globalModal2.hasClass('global-modal2-show');
}
$(".mat-input").focus(function(){
    $(this).parent().addClass("is-active is-completed");
});
$(".mat-input").focusout(function(){
    if($(this).val() === "")
        $(this).parent().removeClass("is-completed");
    $(this).parent().removeClass("is-active");
})
$( ".btn-orange-flat-trigger5" ).on( "click", function(e) {
    e.preventDefault();
    $( globalModal2 ).toggleClass('global-modal2-show');
});


console.clear();