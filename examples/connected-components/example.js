const { connectedComponents } = require('./components');
const { asTree } = require('treeify');

const display = forest => {
  const roots = {};

  forest.forEach(vertex => {
    const { parent, name } = vertex;
    if (parent === vertex) {
      return roots[name] = vertex;
    }
    parent.children = parent.children || {};
    parent.children[name] = vertex;
  })

  console.log(asTree(roots, true));

  forest.forEach(vertex => {
    delete vertex.children;
  });
};

const graph = {
  vertices: [{name: 'A'}, {name: 'B'}, {name: 'C'},
    {name: 'D'}, {name: 'E'}, {name: 'F'}, {name: 'G'}],
  edges: [[0, 6], [4, 5], [2, 5], [2, 3], [3, 4]]
};

console.log(graph);

display(connectedComponents(graph));
