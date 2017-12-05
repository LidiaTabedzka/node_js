var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });  
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write('<img src="https://images.pexels.com/photos/278312/pexels-photo-278312.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="error" width="500"/>');
            response.end();
    }
});
server.listen(8080);