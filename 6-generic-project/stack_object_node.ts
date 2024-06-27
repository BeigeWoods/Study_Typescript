{
  interface Stack<A> {
    readonly size: number;
    push(value: A): void;
    pop(): A;
  }

  type StackNode<A> = {
    readonly value: A;
    readonly next?: StackNode<A>;
  };

  class StackImpl<A> implements Stack<A> {
    private _size: number;
    private head?: StackNode<A>;
    get size() {
      return this._size;
    }
    push(value: A) {
      const node: StackNode<A> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): A {
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<any>();
}
