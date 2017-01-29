'use strict'

var updateCellNeighbor = function(neighbors, coordinates, position) {
  var index = (coordinates[0] + position[0]) + ',' + (coordinates[1] + position[1]);
  if (neighbors[index]) {
    neighbors[index].n++;
  } else {
    neighbors[index] = {'x': coordinates[0] + position[0], 'y': coordinates[1] + position[1], 'n': 1};
  }
}

var evolve = function(shape) {
  if (!shape) {
    return [];
  }

  var neighbors = {};
  var evolvedShape = [];
  var positions = [
    [-1, -1], // top left
    [0, -1],  // top center
    [1, -1],  // top right
    [1, 0],   // right
    [1, 1],   // bottom right
    [0, 1],   // bottom center
    [-1, 1],  // bottom left
    [-1, 0],  // left
  ];

  shape.forEach(function(coordinates, i) {
    positions.forEach(function(position) {
      updateCellNeighbor(neighbors, coordinates, position);
    });
  });

  shape.forEach(function(coordinates) {
    var index = coordinates[0] + ',' + coordinates[1];
    if (neighbors[index]) {
      neighbors[index].populated = true;
    }
  });

  Object.keys(neighbors).forEach(function(key) {
    var neighbor = neighbors[key];
    if (neighbor.n === 3 || neighbor.n === 2 && neighbor.populated) {
      evolvedShape.push([neighbor.x, neighbor.y]);
    }
  });

  return evolvedShape;
}
