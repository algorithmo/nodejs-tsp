
const fs     = require('fs');
const google = require('./googleAPI');
const pug = require('pug');


function home(res,data)
{
      /*fs.readFile('views/index.html', (err, html) => {
      if (err) {
          throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
    });*/
   var html = pug.renderFile('views/index.pug');
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(html);
   res.end();

}

function getdata(res,data)
{
  var dest = [] ;
  var origins =[] ;
  //retrive the data from fields

  ///

var data = google.GetData(res,origins ,dest);
  console.log("ROUTER\n"+data);


}

var router = {
        "/"       : home,
        "/home"   : home,
        "/getdata": getdata
}

exports.router = router ;
