require('dotenv').config()
import Server from "./server";
/**
 * Define new Server with the port 3000 to listen on
 */
const server = new Server(Number(process.env.NODE_PORT));

/**
 * Starting up the server
 */
server.start();