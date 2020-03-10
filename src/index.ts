import Server from "./server";

/**
 * Define new Server with the port 3000 to listen on
 */
const server = new Server(3000);

/**
 * Starting up the server
 */
server.start();