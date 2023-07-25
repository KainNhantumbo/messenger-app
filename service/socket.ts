import { Socket, io } from "socket.io-client";
import { SOCKET_URL } from "../config/client";

export const socket: Socket = io(SOCKET_URL);
