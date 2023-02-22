"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.makeSet = exports.find = void 0;
var makeSet = function makeSet() {
  var singleton = {
    rank: 0
  };
  singleton.parent = singleton;
  return singleton;
};
exports.makeSet = makeSet;
var find = function find(node) {
  if (node.parent !== node) {
    node.parent = find(node.parent);
  }
  return node.parent;
};
exports.find = find;
var union = function union(node1, node2) {
  var root1 = find(node1);
  var root2 = find(node2);
  if (root1 !== root2) {
    if (root1.rank < root2.rank) {
      root1.parent = root2;
    } else {
      root2.parent = root1;
      if (root1.rank === root2.rank) root1.rank += 1;
    }
  }
};
exports.union = union;