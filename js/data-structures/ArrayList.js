class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const poppedElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return poppedElement;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deletedElement = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletedElement;
  }
}
