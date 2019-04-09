import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { enviroments as ENV } from '../enviroments/enviroments';
import router from '../routes';

export default class Server {

  public app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = ENV.SERVER_PORT;
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

  public init(): void {
    this.app.listen(this.port, () => console.log(`Running app in port: ${this.port}`))
  }
}
