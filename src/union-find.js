export const makeSet = () => {
  const singleton = {
    rank: 0
  };
  singleton.parent = singleton;

  return singleton;
};

export const find = node => {
  if (node.parent !== node) {
    node.parent = find(node.parent);
  }

  return node.parent;
};

export const union = (node1, node2) => {
  const root1 = find(node1);
  const root2 = find(node2);
  if (root1 !== root2) {
    if (root1.rank < root2.rank) {
      root1.parent = root2;
    } else {
      root2.parent = root1;
      if (root1.rank === root2.rank) root1.rank += 1;
    }
  }
};
