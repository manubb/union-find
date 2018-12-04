const { hk } = require('./hoshen-kopelman');
const { asTree } = require('treeify');

const display = forest => {
  const roots = {};

  Object.values(forest).forEach(vertex => {
    const { parent, index } = vertex;
    if (parent === vertex) {
      return roots[index] = vertex;
    }
    parent.children = parent.children || {};
    parent.children[index] = vertex;
  })

  console.log(asTree(roots, true));

  Object.values(forest).forEach(vertex => {
    delete vertex.children;
  });
};

const grid = [
  [1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 0],
  [0, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 1],
];

console.log('grid = [');
grid.forEach(row => console.log(' ', row));
console.log(']\n');

display(hk(grid));
