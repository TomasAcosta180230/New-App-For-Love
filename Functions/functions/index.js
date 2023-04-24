const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io-client");
const serviceAccount = require("./serviceAccountkey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://loveapp-82dfb-default-rtdb.firebaseio.com/",
});


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("connect", ({user1, user2}) =>{
    console.log(`User ${user1} and User ${user2} are now connected`);
    const connectedRef = admin.database().ref(`connected/${user1}/${user2}`);
    connectedRef.set(true);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

exports.app = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  app(req, res);
});
