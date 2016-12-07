

const promise = require('promise');


var googleMaps = require('@google/maps').createClient({
  key: 'AIzaSyDBLZJXX1hHAvv8Tequi9qPzm_Mp7wnQr8'
});

var inOneHour = new Date().getTime() + 60 * 60 * 1000;

function expectOK(response) {
  expect(response.status).toBe(200);
  expect(response.json.status).toBe('OK');
  console.log("GOOGLE\n" + response.json);
  return response.json;
}

/*var dataWrapper = new promise.denodeify(function( err, response) {
  if (err){
    console.log(err);

}else{
    var txt = JSON.stringify(response.json, null, 2);
    console.log("GOOGLE\n" +txt);
    /*res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(txt);
    res.end();
    //console.log(txt);
    return txt;
     }
  });*/

function write(fn,data) {
  fs.writeFile(fn,data,'utf8', (err, data) => {
    if(err)
       console.log(err);
    else
       console.log("maps-data has written!");
  });
}



function GetData(res,originsArr , destArr){
  googleMaps.distanceMatrix({
        origins:['Israel'] ,// originsArr, //
        destinations: ['kiryat smona','dimona','givat yoav 4 rison','ashkelon'],//destArr ,//
        departure_time: inOneHour,
        mode: 'driving',
        avoid: ['tolls', 'ferries'],
        traffic_model: 'best_guess'
     },function( err, response){
          if (err){
            console.log(err);
          }else{
             var txt  = JSON.stringify(response.json, null, 2);
             //var json = JSON.parse(response.json);
             console.log(txt);

             res.writeHead(200, {'Content-Type': 'text/plain'});
             res.write(txt);
             res.end();

             //write the result to 'maps-data' file.

             /*fs.open('maps-data.json', 'wx', (err, fd) => {
                          if (err) {
                              if (err.code === "EEXIST") {
                                console.error('file already exists');
                                return;
                            } else {
                              throw err;
                            }
                        }
                        writeMyData(fd);
                      //write('maps-data.json',txt);
                    });*/





             //expectOK(response);*/

          }
   });


 }



/*var test = GetData([],[]);
console.log(test);*/


exports.GetData = GetData;
