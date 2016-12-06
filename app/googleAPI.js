


var googleMaps = require('@google/maps').createClient({
  key: 'AIzaSyDBLZJXX1hHAvv8Tequi9qPzm_Mp7wnQr8'
});

var inOneHour = new Date().getTime() + 60 * 60 * 1000;


function GetData(res,originsArr , destArr)
{

  googleMaps.distanceMatrix({
        origins:['Israel'] , //originsArr, //
        destinations: ['kiryat smona','dimona','givat yoav 4 rison','ashkelon'],//destArr ,
        departure_time: inOneHour,
        mode: 'driving',
        avoid: ['tolls', 'ferries'],
        traffic_model: 'best_guess'
  }, function(err, response)  {
    if (err){
      console.log(err);
    }else{
      var txt = JSON.stringify(response.json, null, 2);
      //console.log(txt);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(txt);
      res.end();
    }

  });
}

exports.GetData = GetData;
