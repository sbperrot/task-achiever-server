"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const server_1 = __importDefault(require("./server"));
/**
 * Define new Server with the port 3000 to listen on
 */
const server = new server_1.default(Number(process.env.NODE_PORT));
/**
 * Starting up the server
 */
server.start();
//# sourceMappingURL=index.js.map