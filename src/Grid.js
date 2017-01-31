'use strict'

var shapes = [
  {name: 'Empty', data:[]},
  {name: 'Blinker', data: [[0,0], [1,0], [2,0]]},
  {name: 'Glider', data:[[1,0], [2,1], [2,2], [1,2], [0,2]]},
  {name: 'Lightweight spaceship (LWWS)', data:[[0,1], [0,3], [1,0], [2,0], [3,0], [3,3], [4,0], [4,1], [4,2]]},
];

var grid = {
  'init': function(containerId, options) {
    this.options = options;
    this.canvas = this.createCanvas(containerId);
  },
  'createCanvas': function(canvasContainerId) {
    var canvasContainer = $('#' + canvasContainerId);

    this.width = Math.floor(canvasContainer.width() / this.options.size) * this.options.size + 1;
    this.height = Math.floor(canvasContainer.height() / this.options.size) * this.options.size + 1;
    this.midPoint = [Math.floor(this.width / this.options.size / 2), Math.floor(this.height / this.options.size / 2)];

    return $('<canvas/>')
    .attr({
      width: this.width,
      height: this.height
    })
    .click(function(event) {
      grid.toggleCell([
        Math.floor((event.clientX - $(this).offset().left) / grid.options.size),
        Math.floor((event.clientY - $(this).offset().top) / grid.options.size)]);
      grid.draw(controls.shape);
    }).appendTo(canvasContainer);
  },
  'draw': function(shape) {
    var ctx = this.canvas[0].getContext('2d');
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.options.strokeColor;

    for (var x = 0; x <= this.width; x += this.options.size) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, this.height);
      ctx.stroke();
      ctx.closePath();
    }

    for (var y = 0; y <= this.height; y += this.options.size) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(this.width, y + 0.5);
      ctx.stroke();
      ctx.closePath();
    }

    ctx.fillStyle = this.options.fillColor;
    shape.forEach(function (coordinates) {
      ctx.fillRect(
        grid.options.size * coordinates[0] + 1,
        grid.options.size * coordinates[1] + 1,
        grid.options.size - 1,
        grid.options.size - 1);
    })
  },
  'toggleCell': function(cell) {
    var index = -1;
    controls.shape.forEach(function(c, i) {
      if (c[0] === cell[0] && c[1] === cell[1]) {
        index = i;
      }
    });

    if (index === -1) {
      controls.shape.push(cell);
    } else {
      controls.shape.splice(index, 1);
    }
  },
  'atMidPoint': function(shape) {
    shape.forEach(function(coordinates) {
      coordinates[0] += grid.midPoint[0];
      coordinates[1] += grid.midPoint[1];
    });
    return shape;
  }
};
