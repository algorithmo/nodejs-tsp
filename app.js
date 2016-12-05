
const server =  require('./server');


var googleMaps = require('@google/maps').createClient({
  key: 'AIzaSyDBLZJXX1hHAvv8Tequi9qPzm_Mp7wnQr8'
});


var inOneHour = new Date().getTime() + 60 * 60 * 1000;



googleMaps.distanceMatrix({
      origins: ['Israel'],
      destinations: ['kiryat smona','dimona','givat yoav 4 rison','ashkelon'],
      departure_time: inOneHour,
      mode: 'driving',
      avoid: ['tolls', 'ferries'],
      traffic_model: 'best_guess'
}, function(err, response)  {
  if (err){
    console.log(err);
  }else{
    var txt = response.json;
    console.log(txt);
    server.Start(txt);
  }

});
