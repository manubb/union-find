Union-Find
==========

A JS implementation of [disjoint-set](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) data structure for node and browsers.

## Installation
The library is available as a npm package:
```
npm install @manubb/union-find
```

## Examples
Examples directory contains implementations of:
* an algorithm to compute [connected components](https://en.wikipedia.org/wiki/Connected_component_(graph_theory)) of a graph
* [Kruskal algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
* [Hoshen-Kopelman algorithm](https://en.wikipedia.org/wiki/Hoshen%E2%80%93Kopelman_algorithm)

Examples can be run with:
```
npm run example:components
npm run example:hk
npm run example:kruskal
```

## API

The library uses trees to encode sets. It exposes three functions.
### makeSet
```js
makeSet();
```
returns an object representing a set containing one element. It has two properties: `parent` and `rank`. You can then safely add other properties that suit to your needs.

Note that you can also use your own custom function that should return an object `obj` with:
```js
obj.rank === 0
obj.parent === obj
```

At any time, you can check if  `obj` is the root of a tree with:
```js
obj.parent === obj
```

### find
```js
find(obj)
```
returns the root of the tree that contains `obj`. Checking if two objects belong to the same set can be done with:
```js
find(obj1) === find(obj2)
```

### union
```js
union(obj1, obj2)
```
merges the sets containing `obj1` and `obj2` and returns `undefined`.

## Complexity
`makeSet` run in constant time. If `n` is the total number of elements, `find` and `union` run in amortized time `O(α(n))` where α is the inverse Ackermann function. It is a very slowly increasing function: `α(10^35164)=5`. For all practical purposes, one can consider that `find` and `union` run in constant amortized time.

## Usage

```js
import { makeSet, find, union } from '@manubb/union-find';
```

or

```js
const { makeSet, find, union } = require('@manubb/union-find');
```
