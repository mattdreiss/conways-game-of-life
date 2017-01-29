'use strict'

var positions = {
  "TOP_LEFT": {'x': -1, 'y': -1},
  "TOP_CENTER": {'x': 0, 'y': -1},
  "TOP_RIGHT": {'x': 1, 'y': -1},
  "RIGHT": {'x': 0, 'y': 1},
  "BOT_RIGHT": {'x': 1, 'y': 1},
  "BOT_CENTER": {'x': 0, 'y': 1},
  "BOT_LEFT": {'x': -1, 'y': 1},
  "LEFT": {'x': 0, 'y': -1},
}

var updateCellNeighbors = function(neighbors, coordiates, position) {
  var index = (coordiates[0] + position[x]) + ',' + (coordinates[1] + position[y]);
  if (neighbors[index]) {
    neighbors[index].n++;
  } else {
    neighbors[index] = {'x': coordiates[0] + position[x], 'y': coordiates[1] + position[y], 'n': 1};
  }
}

function evolve(shape) {
  var neighbors = {};
  var evolvedShape = [];

  shape.forEach(function(coordiates, i) {
    positions.forEach(function(position) {
      updateCellNeighbors(neighbors, coordiates, position);
    });
  });

  shape.forEach(function(coordiates) {
    var index = (coordiates[0] + position[x]) + ',' + (coordinates[1] + position[y]);
    if (neighbors[index]) {
      neighbors[index].populated = true;
    }
  });

  neighbors.forEach(function(neighbor) {
    if (neighbor.n === 3 || neighbor.n === 2 && neighbor.populated) {
      evolvedShape.push([neighbor.x, neighbor.y]);
    }
  });

  return evolvedShape;
}
