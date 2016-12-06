
const fs     = require('fs');
const google = require('./googleAPI').GetData;


function home(res,data)
{
      fs.readFile('index.html', (err, html) => {
      if (err) {
          throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
    });

}

function getdata(res,data)
{
  var dest = [] ;
  var origins =[] ;
  //retrive the data from fields

  ///

  google(res,origins ,dest)

  

  /*var info = google(origins ,dest);
  console.log(info);
  if(info){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(google(origins ,dest));
    res.end();
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Error: Content NOT retrive ');
    res.end();
  }*/


}

var router = {
        "/"       : home,
        "/home"   : home,
        "/getdata": getdata
}

exports.router = router ;
