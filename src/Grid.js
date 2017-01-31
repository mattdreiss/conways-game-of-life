'use strict'
var grid = {
  'init': function(containerId, options) {
    this.options = options;
    this.canvas = this.createCanvas(containerId);
  },
  'createCanvas': function(canvasContainerId) {
    var canvasContainer = $('#' + canvasContainerId);

    var canvasWidth = Math.floor(canvasContainer.width() / this.options.size) * this.options.size + 1;
    var canvasHeight = Math.floor(canvasContainer.height() / this.options.size) * this.options.size + 1;

    return $('<canvas/>')
    .attr({
      width: canvasWidth,
      height: canvasHeight
    }).appendTo(canvasContainer);
  },
  'draw': function(shape) {
    var width = this.canvas.width();
    var height = this.canvas.height();
    var midPointX = width / 2 / this.options.size;
    var midPointY = height / 2 / this.options.size;

    var ctx = this.canvas[0].getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = this.options.strokeColor;

    for (var x = 0; x <= width; x += this.options.size) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, height);
      ctx.stroke();
      ctx.closePath();
    }

    for (var y = 0; y <= height; y += this.options.size) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(width, y + 0.5);
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
  }
};
