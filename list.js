'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class List {
  constructor () {
    this.head = null
  }

  add (node) {
    if (this.head) {
      let current = this.head

      while(current.next) {
        current = current.next
      }
      current.next = node

      console.log('more than one', current)

    } else {
      this.head = node
    }
  }
}

const list = new List
list.add(new Node('A'))
list.add(new Node('B'))
list.add(new Node('C'))
console.log(list)
