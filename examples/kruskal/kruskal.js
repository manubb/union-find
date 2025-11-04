const { union, find, makeSet } = require('../../src/union-find');

const kruskal = ({ vertices, edges }) => {
  const selection = [];
  const forest = vertices.map(({ name }) => {
    const tree = makeSet();
    tree.name = name;

    return tree;
  });
  edges.sort(({ weight: w1}, {weight: w2 }) => w1 - w2);

  edges.forEach(edge => {
    const { join: [from, to] } = edge;
    if (find(forest[from]) !== find(forest[to])) {
      selection.push(edge);
      union(forest[from], forest[to]);
    }
  });

  return selection;
};

module.exports = { kruskal };
