'use strict'

describe('Test Conway\'s game of life simulation', function() {

  it('updates non-existant cell neighbor', function() {
    var neighbors = {};
    var expected = {'0,0' : {'x': 0, 'y': 0, 'n': 1}};

    updateCellNeighbor(neighbors, [1,0], [-1, 0]);
    expect(neighbors['0,0'].x).toBe(expected['0,0'].x);
    expect(neighbors['0,0'].y).toBe(expected['0,0'].y);
    expect(neighbors['0,0'].n).toBe(expected['0,0'].n);
  });

  it('updates existing cell neighbor', function() {
    var neighbors = {'0,0' : {'x': 0, 'y': 0, 'n': 2}};
    var expected = {'0,0' : {'x': 0, 'y': 0, 'n': 3}};

    updateCellNeighbor(neighbors, [1,0], [-1, 0]);
    expect(neighbors['0,0'].x).toBe(expected['0,0'].x);
    expect(neighbors['0,0'].y).toBe(expected['0,0'].y);
    expect(neighbors['0,0'].n).toBe(expected['0,0'].n);
  });

  it('evolves undefined shape', function() {
    expect(evolve().length).toBe(0);
  });

  it('evolves empty shape', function() {
    var shape = [];

    expect(evolve(shape).length).toBe(0);
  });

  it('evolve 3 cell shape', function() {
    var shape = [[0,0], [1,1], [0,2]];

    var result = evolve(shape);
    expect(result).toContain([0,1]);
    expect(result).toContain([1,1]);
  });
});
