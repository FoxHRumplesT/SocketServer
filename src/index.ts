import Server from './server';

const server = new Server(); 

server.configBodyParser();
server.configCors();
server.configRoutes();
server.init();
