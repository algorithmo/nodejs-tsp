

const http = require('http');


function Start(txt) {

    const server = http.createServer((req, res) => {

        req.setEncoding("utf8");
        res.writeHead(200, {'Content-Type': 'text/plain'});

        res.write(JSON.stringify(txt, null, 2));
        res.end();



    }).listen(8080);

    server.on('clientError', (err, socket) => {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
    var date = new Date();
    console.log('Server start at localhost:8080  ' + date.toUTCString());

}



exports.Start = Start ;
