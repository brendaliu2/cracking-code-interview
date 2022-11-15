class StackOfPlates {
  constructor() {
    this.stackSet = [[]];
    this.maxHeight = 5;
  }

  pushVal(val) {
    const lastStack = this.stackSet.at(-1);
    if (lastStack.length < this.maxHeight) {
      this.stackSet.at(-1).push(val);
    } else {
      this.stackSet.push([val]);
    }
  }

  popVal() {
    if (!this.stackSet.length) return 'Empty Stack';
    const popped = this.stackSet.at(-1).pop();
    const lastStack = this.stackSet.at(-1);
    if (!lastStack.length) {
      this.stackSet.pop();
      return popped;
    } else {
      return popped;
    }
  }

  popAt(stackIdx) {
    if (!this.stackSet.length) return 'Empty Stack';
    return this.stackSet[stackIdx].pop();
  }
}