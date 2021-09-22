const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    conn.write("Name: SDP");
    //setInterval(() =>conn.write("Move: up"), 1500);

  });
  
  conn.on("data", (data) => {
    console.log(data)
  });
  
  return conn;
};
console.log("Connecting ...");
connect();

module.exports = {
  connect
};