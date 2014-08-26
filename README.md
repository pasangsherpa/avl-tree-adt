# avl-tree-adt [![Build Status](https://travis-ci.org/pasangsherpa/avl-tree-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/avl-tree-adt)

> AVL Tree ADT for browser and nodejs


## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/avl-tree-adt/master/dist/avl-tree-adt.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/avl-tree-adt/master/dist/avl-tree-adt.js

```sh
$ npm install --save avl-tree-adt
```

```sh
$ bower install --save avl-tree-adt
```


## Usage

```js
var AVLTree = require('avl-tree-adt');
var avlTree = new AVLTree();

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/avl-tree-adt/master/dist/avl-tree-adt.min.js"></script>
<script type="text/javascript"> 
  var avlTree = new AVLTree();

</script>
```

## Documentation

### AVLTree()

Create an empty tree with.

### Methods

#### .add(element)

Add an element to tree.

##### element

Type: `object`

the element to be added to the tree.

#### .remove(element) `throws "No such element" error` 

Remove an element from the tree and return the element.

##### element

Type: `object`

the element to be removed from the tree.

#### .getRoot()

Returns the root of the tree.

Type: `object`

the root of the tree

#### .find(element) `throws "No such element" error` 

Find an element from the tree and return the element.

##### element

Type: `object`

the specified element.

#### .isEmpty()

Returns true if this tree contains no elements.

Type: `boolean`

whether or not the tree is empty.

#### .size()

Returns the number of elements in the tree.

Type: `int`

the number of element in the tree.

## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
