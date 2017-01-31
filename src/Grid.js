'use strict'

var drawGrid = function(canvasContainerId, options) {
  if (options === undefined) {
    options = {
      'separation': 15,
      'strokeColor': '#3D5A80',
      'fillColor': '#67EFBF'
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

  for (var i = 1; i < verticalLineCount; i++) {
    var x = (i * options.separation);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);

  }

  for (var i = 1; i < horizontalLineCount; i++) {
    var y = (i * options.separation);
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
  }


  ctx.strokeWidth = 1;
  ctx.strokeStyle = options.strokeColor;
  ctx.stroke();

  ctx.fillStyle = options.fillColor;
  ctx.fillRect(options.separation * 4, options.separation * 4, options.separation, options.separation);

};

$(document).ready(function() {
  drawGrid("canvasContainer");
});