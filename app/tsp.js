
const google = require('./googleAPI');
const vis = require('vis');


function TSP(origin,addrs){
    google.GetData(origin,addrs);
    console.log(google.result);
      // create an array with nodes
      var nodes = new vis.DataSet([
          {id: 1, label: 'Node 1'},
          {id: 2, label: 'Node 2',color: 'red'},
          {id: 3, label: 'Node 3'},
          {id: 4, label: 'Node 4'},
          {id: 5, label: 'Node 5'}
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
          {from: 1, to: 3},
          {from: 1, to: 2 ,label:'44.7 km'},
          {from: 2, to: 4},
          {from: 2, to: 5}
      ]);

      // create a network
      var container = document.getElementById('mynetwork');

      // provide the data in the vis format
      var data = {
          nodes: nodes,
          edges: edges
      };
      var options = {};

      // initialize your network!
      var network = new vis.Network(container, data, options);
      network.startSimulation();

  }

  TSP(['isreal'],['ashkelon', 'givat yoav 3']);
