export class Element {
  constructor(element) {
    this.element = element;
    this._next = null;
  }

  get value() {
    return this.element;
  }

  get next() {
    return this._next;
  }

  set next(nextElement) {
    this._next = nextElement;
  }

  set value(element) {
    this.element = element;
  }
}

export class List {
  constructor(array) {
    this._head = null;
    if (array) {
      array.forEach((el) => this.add(new Element(el)));
    }
  }

  add(element) {
    if (this._head === null) {
      this._head = element;
    } else {
      element.next = this._head;
      this._head = element;
    }
  }

  get length() {
    return this.toArray().length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const arr = [];
    let head = this._head;

    while (head !== null) {
      arr.push(head.value);
      head = head.next;
    }
    return arr;
  }

  reverse() {
    const reversed = this.toArray();
    this._head = null;
    let newList = new List(reversed);
    return newList;
  }
}
