const { union, makeSet } = require('../../union-find');

const hk = (grid) => {
  const forest = {};
  grid.forEach((line, x) => {
    line.forEach((hasCell, y) => {
      if (hasCell) {
        const tree = makeSet();
        const index = `${x}-${y}`;
        tree.index = index;
        forest[index] = tree;

        const left = forest[`${x-1}-${y}`]
        const top = forest[`${x}-${y-1}`]
        if (left) {
          union(tree, left);
        }
        if (top) {
          union(tree, top);
        }
      }
    });
  });

  return forest;
};

module.exports = { hk };
