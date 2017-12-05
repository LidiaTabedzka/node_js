var http = require('http');
var colors = require('colors');
var handlers = require('./handlers');
var url = require('url');

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");
    var parsedUrl = url.parse(request.url, true);

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

    switch (parsedUrl.pathname) {
        case '/':
        case '/start':
            handlers.welcome(request, response);
            break;
        case '/css/style.css':
            handlers.welcomeCss(request, response);
            break;
        case '/upload':
            handlers.upload(request, response);
            break;
        case '/show':
            handlers.show(request, response, parsedUrl.query.name);
            break;
        default:
            handlers.error(request, response);
    }
  }

  http.createServer(onRequest).listen(9000);

  console.log("Uruchomiono serwer!".green);
}

exports.start = start;