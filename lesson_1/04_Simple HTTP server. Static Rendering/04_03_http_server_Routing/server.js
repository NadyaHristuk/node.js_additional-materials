var http = require('http');
var fs = require('fs');

let server = http.createServer(function(req, res) {
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('./index.html', null, function(error, data) {
            if (error) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if(req.url === '/contact'){
        fs.readFile('./contact.html', null, function(error, data) {
            if (error) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('File not found!');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            res.end();
        });

    } else {
        res.writeHead(404, {'Content-Type': 'text/plan'});
        res.write('File not found!');
    }
});

server.listen(8000);