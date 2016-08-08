import io from "socket.io-client";

const baseUrl = process.env.NODE_ENV === "production" ? "http://ec2-52-38-24-188.us-west-2.compute.amazonaws.com:3456/": "http://localhost:3456/";

console.log("baseUrl = ", baseUrl);
console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);

let socket;

const connectSocket = () => {
  socket = io.connect(baseUrl, {
    transports: ["websocket"],
    "force new connection": true
  });
};

export { connectSocket, socket };
