'use strict'

var createCanvas = function(canvasContainerId, options) {
  var canvasContainer = $('#' + canvasContainerId);

  var canvasWidth = Math.floor(canvasContainer.width() / options.size) * options.size + 1;
  var canvasHeight = Math.floor(canvasContainer.height() / options.size) * options.size + 1;

  return $('<canvas/>')
  .attr({
    width: canvasWidth,
    height: canvasHeight
  }).appendTo(canvasContainer);
}

var drawGrid = function(canvas, shape, options) {
  var width = canvas.width();
  var height = canvas.height();
  var midPointX = width / 2 / options.size;
  var midPointY = height / 2 / options.size;

  var ctx = canvas[0].getContext('2d');
  ctx.clearRect(0, 0, width, height);
  ctx.lineWidth = 1;
  ctx.strokeStyle = options.strokeColor;

  for (var x = 0; x <= width; x += options.size) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
    ctx.stroke();
    ctx.closePath();
  }

  for (var y = 0; y <= height; y += options.size) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
    ctx.stroke();
    ctx.closePath();
  }

  ctx.fillStyle = options.fillColor;
  shape.forEach(function (coordinates) {
    ctx.fillRect(options.size * coordinates[0] + 1, options.size * coordinates[1] + 1, options.size - 1, options.size - 1);
  });

};
