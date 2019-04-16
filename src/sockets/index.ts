import { Socket, Server } from "socket.io";

import { Message } from "../models/message";

export const listenDisconnect = (client: Socket): void => {
  client.on('disconnect', (client) =>{});
}

export const listenMessages = (client: Socket, io: Server): void => {
  client.on('message', (message: Message) => io.emit('new-message', message));
}

export const listenConfigUser = (client: Socket): void => {
  client.on('set-user', (user: any, callback: Function) => callback(user));
}