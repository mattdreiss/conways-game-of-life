'use strict'

var Controls = {
  'init': function(animateBtn, shape, canvas, canvasOptions, frequency) {
    this.animateBtn = animateBtn;
    this.animateBtn.click(function() {
      Controls.toggleAnimate();
    });
    this.shape = shape,
    this.canvas = canvas,
    this.canvasOptions = canvasOptions
    this.frequency = frequency;
    this.animating = false;
    drawGrid(canvas, shape, canvasOptions);
  },
  'animate': function() {
    this.interval = setInterval(function() {
      Controls.shape = evolve(Controls.shape);
      drawGrid(Controls.canvas, Controls.shape, Controls.canvasOptions);
    }, this.frequency);
  },
  'toggleAnimate': function() {
    if (!this.animating) {
      this.animate();
      this.animateBtn.text("stop");
    } else {
      clearInterval(this.interval);
      this.animateBtn.text("start");
    }
    this.animating = !this.animating;
  }
};

$(document).ready(function() {
  var canvasOptions = {
    'size': 15,
    'strokeColor': '#3D5A80',
    'fillColor': '#EE6C4D',
  };

  var canvas = createCanvas("canvasContainer", canvasOptions)
  var shape = [[1,0], [2,1], [2,2], [1,2], [0,2]];

  Controls.init($('#start-stop'), shape, canvas, canvasOptions, 250);
});
