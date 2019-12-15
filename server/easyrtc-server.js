// Load required modules
var http = require("http"); // http server core module
const bodyParser = require("body-parser");
var express = require("express"); // web framework external module
var serveStatic = require("serve-static"); // serve static files
var socketIo = require("socket.io"); // web socket external module
var easyrtc = require("easyrtc"); // EasyRTC external module
var catMe = require("cat-me");
var fs = require("fs");
var path = require('path');

let string = "";

var myReadStream = fs.createReadStream(__dirname + "/test.txt", "utf-8");

fs.writeFile("./server/bye.txt", "im created at runtime!!!", err => {
  if (err) {
    console.log(err);
  }
});

console.log("\n" + catMe());

// Set process name
process.title = "node-easyrtc";

// Get port or default to 8080
var port = process.env.PORT || 8080;

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var app = express();

// app.use(serveStatic("server/static", { index: ["myexample.html"] }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, '/static','test.html'));
// });

app.use(express.static(path.join(__dirname,'static')));

app.get("/hello", function(req, res) {
  console.log("Hello!!!");
  res.send("getting response!");
});

app.get("/test", function(req, res) {
  myReadStream.on("data", function(chunk) {
    string = string + chunk;
    res.send(string);
  });
});

app.post("/postTest", function(req, res) {
  console.log(req.body);
  res.send("getting post data!");
});

app.get("/user/:userId", function(req, res) {
  console.log("Hello user!!!");
});

// Start Express http server
var webServer = http.createServer(app);

// Start Socket.io so it attaches itself to Express server
var socketServer = socketIo.listen(webServer, { "log level": 1 });

var myIceServers = [
  { url: "stun:stun.l.google.com:19302" },
  { url: "stun:stun1.l.google.com:19302" },
  { url: "stun:stun2.l.google.com:19302" },
  { url: "stun:stun3.l.google.com:19302" }
  // {
  //   "url":"turn:[ADDRESS]:[PORT]",
  //   "username":"[USERNAME]",
  //   "credential":"[CREDENTIAL]"
  // },
  // {
  //   "url":"turn:[ADDRESS]:[PORT][?transport=tcp]",
  //   "username":"[USERNAME]",
  //   "credential":"[CREDENTIAL]"
  // }
];
easyrtc.setOption("appIceServers", myIceServers);
easyrtc.setOption("logLevel", "debug");
easyrtc.setOption("demosEnable", false);

// Overriding the default easyrtcAuth listener, only so we can directly access its callback
easyrtc.events.on("easyrtcAuth", function(
  socket,
  easyrtcid,
  msg,
  socketCallback,
  callback
) {
  easyrtc.events.defaultListeners.easyrtcAuth(
    socket,
    easyrtcid,
    msg,
    socketCallback,
    function(err, connectionObj) {
      if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
        callback(err, connectionObj);
        return;
      }

      connectionObj.setField("credential", msg.msgData.credential, {
        isShared: false
      });

      console.log(
        "[" + easyrtcid + "] Credential saved!",
        connectionObj.getFieldValueSync("credential")
      );

      callback(err, connectionObj);
    }
  );
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on("roomJoin", function(
  connectionObj,
  roomName,
  roomParameter,
  callback
) {
  console.log(
    "[" + connectionObj.getEasyrtcid() + "] Credential retrieved!",
    connectionObj.getFieldValueSync("credential")
  );
  easyrtc.events.defaultListeners.roomJoin(
    connectionObj,
    roomName,
    roomParameter,
    callback
  );
});

// Start EasyRTC server
var rtc = easyrtc.listen(app, socketServer, null, function(err, rtcRef) {
  console.log("Initiated");

  rtcRef.events.on("roomCreate", function(
    appObj,
    creatorConnectionObj,
    roomName,
    roomOptions,
    callback
  ) {
    console.log("roomCreate fired! Trying to create: " + roomName);

    appObj.events.defaultListeners.roomCreate(
      appObj,
      creatorConnectionObj,
      roomName,
      roomOptions,
      callback
    );
  });
});

//listen on port
webServer.listen(port, function() {
  console.log("listening on http://localhost:" + port);
});
