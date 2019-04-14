import cors from 'cors';
import http from 'http';
import express from 'express';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';

import { enviroments as ENV } from '../enviroments/enviroments';
import { listenDisconnect, listenMessages } from '../sockets';
import router from '../routes';

export default class Server {

  private static _instance: Server;
  private app: express.Application;
  private port: number;
  private socketIo: SocketIO.Server;
  private httpServer: http.Server;

  constructor() {
    this.port = ENV.SERVER_PORT;
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.socketIo = socketIO(this.httpServer);
    this.initSockets();
  }

  public static get instance(): Server {
    return this._instance || (this._instance = new this());
  }

  public configBodyParser(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  public configCors(): void {
    this.app.use(cors({ origin: true, credentials: true }))
  }

  public configRoutes(): void {
    this.app.use('/', router);
  }

  public initSockets(): void {
    this.socketIo.on('connection', (client) => {
      listenMessages(client, this.socketIo);
      listenDisconnect(client);
    });
  }

  public init(): void {
    this.httpServer.listen(this.port, () => console.log(`Running app in port: ${this.port}`))
  }
}
