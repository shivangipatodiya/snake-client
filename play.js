const { connect } = require('./client');
const { setupInput } = require('./input');
// establishes a connection with the game server

console.log("Connecting ...");
const conn = connect();

conn.on('connect', () => {
  conn.write("Name: SDP");
  //setInterval(() =>conn.write("Move: up"), 1500);

});

conn.on("data", (data) => {
  console.log(data)
});

const stdin = setupInput(conn);
