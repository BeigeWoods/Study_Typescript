type LinkedNode<A> = {
  readonly val: A;
  readonly next?: LinkedNode<A>;
};

class Linked_node<A> {
  readonly val: A;
  readonly next?: LinkedNode<A>;

  constructor(val: A, next?: LinkedNode<A>) {
    this.val = val;
    this.next = next;
  }
}

interface Stack_Type<A> {
  push(value: A): void;
  pop(): A | void;
  length(): number;
}

class Stack<A> implements Stack_Type<A> {
  private root? = new Linked_node(<A>undefined, undefined);
  private size = 0;

  push(value: A) {
    this.root = new Linked_node(value, this.root);
    this.size++;
  }

  pop() {
    if (this.root?.val) {
      const current = this.root.val;
      this.root = this.root.next;
      this.size--;
      return current;
    }
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
