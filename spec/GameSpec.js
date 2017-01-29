'use strict'

describe('Test Conway\'s game of life simulation', function() {
  it('it works', function() {
    expect(true).toBeTruthy();
  });

  it('evolve 3 cell shape', function() {
    var shape = [[0,0], [1,1], [0,2]];

    var result = evolve(shape);
    expect(result).toContain([0,1]);
    expect(result).toContain([1,1]);
  });
});
