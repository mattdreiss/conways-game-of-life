'use strict'

var controls = {
  'init': function(animateBtn, shape, grid, frequency) {
    this.animateBtn = animateBtn;
    this.animateBtn.click(function() {
      controls.toggleAnimate();
    });
    this.shape = shape,
    this.grid = grid,
    this.frequency = frequency;
    this.animating = false;
    this.grid.draw(shape);
  },
  'animate': function() {
    this.interval = setInterval(function() {
      controls.shape = evolve(controls.shape);
      this.grid.draw(controls.shape);
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
  var shape = [[1,0], [2,1], [2,2], [1,2], [0,2]];

  grid.init("canvasContainer", canvasOptions);
  controls.init($('#start-stop'), shape, grid, 250);
});
