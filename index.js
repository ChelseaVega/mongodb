const { log } = require('console');
const app = require ('./app'); // crear un protocolo de transferencia 
const http = require('http');
const server = http.createServer(app);

server.listen(3000,()=>{
  console.log('El servidor esta corriendo');


})