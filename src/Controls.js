'use strict'

var controls = {
  'init': function(contolContainer, grid, frequency) {
    this.grid = grid,
    this.frequency = frequency;
    this.animating = false;
    this.grid.draw();

    this.animateBtn = $('<button>')
      .attr('id', 'toggleAnimate')
      .addClass('btn')
      .text('Start')
      .click(function() {
        controls.toggleAnimate();
      })
      .appendTo(contolContainer);

    this.nextBtn = $('<button>')
      .attr('id', 'next')
      .addClass('btn')
      .text('Next >>')
      .click(function() {
        controls.next();
      })
      .appendTo(contolContainer);

    this.randomizeBtn = $('<button>')
      .attr('id', 'randomize')
      .addClass('btn')
      .text('Random')
      .click(function() {
        grid.loadRandomShape();
        grid.draw();
      })
      .appendTo(contolContainer);
  },
  'next': function() {
    this.grid.shape = evolve(this.grid.shape);
    this.grid.draw();
  },
  'animate': function() {
    this.interval = setInterval(function() {
      this.grid.shape = evolve(this.grid.shape);
      this.grid.draw();
    }, this.frequency);
  },
  'toggleAnimate': function() {
    if (!this.animating) {
      this.animate();
      this.animateBtn.text("Stop");
    } else {
      clearInterval(this.interval);
      this.animateBtn.text("Start");
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
  grid.init($('#canvasContainer'), canvasOptions, shape);
  controls.init($('.controls'), grid, 10);
});
