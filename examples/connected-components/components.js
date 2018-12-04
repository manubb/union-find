const { union, makeSet } = require('../../union-find');

const connectedComponents = ({ vertices, edges }) => {
  const forest = vertices.map(({ name }) => {
    const tree = makeSet();
    tree.name = name;

    return tree;
  });
  edges.forEach(([from, to]) => {
    union(forest[from], forest[to]);
  });

  return forest;
};

module.exports = { connectedComponents };
