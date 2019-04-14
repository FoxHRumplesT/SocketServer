import { Socket, Server } from "socket.io";

import { Message } from "../models/Message";

export const listenDisconnect = (client: Socket): void => {
  client.on('disconnect', (client) =>{});
}

export const listenMessages = (client: Socket, io: Server): void => {
  client.on('message', (message: Message) => io.emit('new-message', message));
}
