const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.debug('l: ', l);
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
    addtList(value) {
      this.head = value;
      const count = (object) => {
        for (const [value, next] of Object.entries(object)) {
          if ((typeof next === "object" || typeof next === "number") && next !== null) {
            if (typeof next === "number") {
              this.length++;
            }
            count(next);
          } else {
            return;
          }
        }
      };
      count(this.head);
    }
    removeFromPosition(position) {
      if (position < 0 || position > this.length) {
        return 'Incorrect value of position';
      }
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
        let prev = null;
        let index = 0;

        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
        prev.next = current.next;
      }
      this.length--;
      return current.value;
    }
    removeElementByValue(value) {
      return this.removeFromPosition(this.indexOf(value));
    }
    indexOf(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
    getList() {
      return this.head;
    }
  }
  const linkedList = new LinkedList();
  linkedList.addtList(l);
  const remove = () => {
    if (linkedList.removeElementByValue(k)) {
      linkedList.removeElementByValue(k);
    } else {
      remove();
    }
  };
  remove();
  return linkedList.getList();
}

module.exports = {
  removeKFromList
};