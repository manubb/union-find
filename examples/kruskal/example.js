const { kruskal } = require('./kruskal');
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
  vertices: [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'},
    {name: 'D'},
    {name: 'E'},
    {name: 'F'},
    {name: 'G'}
  ],
  edges: [
    {
      weight: 7,
      join: [0, 1]
    },
    {

      weight: 5,
      join: [0, 3]
    },
    {

      weight: 8,
      join: [1, 2]
    },
    {

      weight: 9,
      join: [1, 3]
    },
    {

      weight: 7,
      join: [1, 4]
    },
    {

      weight: 5,
      join: [2, 4]
    },
    {

      weight: 15,
      join: [3, 4]
    },
    {

      weight: 6,
      join: [3, 5]
    },
    {

      weight: 8,
      join: [4, 5]
    },
    {

      weight: 9,
      join: [4, 6]
    },
    {

      weight: 11,
      join: [5, 6]
    }
  ]
};

console.log('graph:\n', graph);

console.log('edge selection:\n', kruskal(graph));

