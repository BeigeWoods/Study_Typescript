type LinkedNode = {
  readonly val: string;
  readonly next?: LinkedNode;
};

class Linked_node {
  readonly val: string;
  readonly next?: LinkedNode;

  constructor(val = "", next?: LinkedNode) {
    this.val = val;
    this.next = next;
  }
}

interface Stack_T {
  push(value: string): void;
  pop(): string | void;
  length(): number;
}

class Stack implements Stack_T {
  private root? = new Linked_node();
  private size = 0;

  push(value: string) {
    this.root = new Linked_node(value, this.root);
    this.size++;
  }

  pop() {
    if (!this.root) {
      return;
    }
    const current = this.root.val;
    this.root = this.root.next;
    this.size--;
    return current;
  }

  length() {
    return this.size;
  }
}

const stack = new Stack();
stack.push("a");
stack.push("b");
stack.push("c");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push("a");
console.log(stack.pop());
console.log(stack.length());
