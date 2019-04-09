import Server from './server';

const server = Server.instance;

server.configBodyParser();
server.configCors();
server.configRoutes();
server.init();
