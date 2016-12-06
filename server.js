

const http = require('http');
const fs   = require('fs');
const url  = require('url');
const qs   = require('querystring');


function Start(router) {
   var date = new Date();
    const server = http.createServer((req, res) => {

        var data = '';
        var path = url.parse(req.url).pathname;

        req.setEncoding("utf8");

        /*res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(JSON.stringify(txt, null, 2));
        res.end();*/

        req.on("data",(chunk) => {
            data += chunk ;
        });

        req.on("end",() => {

            //console.log("data: " + data);
            date = new Date();
            console.log("req: ["+date.toUTCString() +'] '+ path);
            if(typeof router[path] === 'function'){
              router[path](res,data);

            } else {
                  res.writeHead(404, {'Content-Type': 'text/plain'});
                  res.write('Error:'+ path +'\n  page not found ');
                  res.end();
                }

        });

    }).listen(8080);

    server.on('clientError', (err, socket) => {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
    date = new Date();
    console.log('Server start at localhost:8080  ' + date.toUTCString());

}



exports.Start = Start ;
