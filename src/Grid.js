'use strict'

var drawGrid = function(canvasContainerId, options) {
  if (options === undefined) {
    options = {
      'separation': 15,
      'strokeColor': '#3D5A80',
      'fillColor': '#EE6C4D'
    };
  }

  var canvasContainer = $('#' + canvasContainerId);

  var verticalLineCount = Math.floor(canvasContainer.width() / options.separation);
  var horizontalLineCount = Math.floor(canvasContainer.height() / options.separation);

  var canvasWidth = options.separation * verticalLineCount;
  var canvasHeight = options.separation * horizontalLineCount;

  var canvas = $('<canvas/>')
  .attr({
    width: canvasWidth,
    height: canvasHeight
  }).appendTo(canvasContainer);

  var ctx = canvas[0].getContext('2d');
  ctx.lineWidth = 1;
  ctx.strokeStyle = options.strokeColor;

  for (var x = options.separation; x < canvasWidth; x += options.separation) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, canvasHeight);
    ctx.stroke();
    ctx.closePath();
  }

  for (var y = options.separation; y < canvasHeight; y += options.separation) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(canvasWidth, y + 0.5);
    ctx.stroke();
    ctx.closePath();
  }

  ctx.fillStyle = options.fillColor;
  ctx.fillRect(options.separation * 4 + 1, options.separation * 4 + 1, options.separation - 1, options.separation - 1);

};

$(document).ready(function() {
  drawGrid("canvasContainer");
});
