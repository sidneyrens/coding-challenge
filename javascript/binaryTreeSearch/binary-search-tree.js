//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.

export class BinarySearchTree {
  constructor(node) {
    this._data = node;
    this._right = null;
    this._left = null;
  }
  //prob dont need a root take this out. then also name variables better use _ for the this variables to distinction between the names
  get data() {
    return this._data;
  }
  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  insert(data) {
    const node = this;
    if (node._data === null) {
      node._data = new BinarySearchTree(data);
    } else {
      const searchTree = (node) => {
        if (data <= node._data) {
          if (node._left === null) {
            node._left = new BinarySearchTree(data);
            return;
          } else if (node._left !== null) {
            return searchTree(node._left);
          }
        } else if (data > node._data) {
          if (node._right === null) {
            node._right = new BinarySearchTree(data);
            return;
          } else if (node._right !== null) {
            return searchTree(node._right);
          }
        }
      };
      return searchTree(node);
    }
  }

  each(fn) {
    if (this._left !== null) {
      this._left.each(fn);
    }

    fn(this._data);

    if (this._right !== null) {
      this._right.each(fn);
    }
  }
}
