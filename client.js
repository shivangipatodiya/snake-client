const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");  
  return conn;
};
module.exports = {
  connect
};