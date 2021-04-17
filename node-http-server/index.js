const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello World')
    } else if (request.url === '/about') {
        response.write('This is the about page');
    } else {
        response.write('Page not found');
    }

    response.end();
});

server.listen(3000); //Waiting for connections on PORT 3000