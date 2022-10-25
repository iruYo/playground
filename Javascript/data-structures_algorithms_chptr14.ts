class LinkedListNode {
    data
    nextNode
    constructor(data) {
        this.data = data
        this.nextNode = null
    }
}

class DoublyLinkedListNode {
    data
    nextNode
    constructor(data) {
        this.data = data
        this.nextNode = null
    }
}

class DoublyLinkedList {
    firstNode
    lastNode
    constructor() {
        this.firstNode = null
        this.lastNode = null
    }
}

class LinkedList {
    firstNode
    constructor() {
        this.firstNode = null
    }

    add = function (node) {
        if (this.firstNode === null) {
            this.firstNode = node
        } else {
            let current = this.firstNode
            while (current.nextNode)
                current = current.nextNode

            current.nextNode = node
        }
    }

    read = function (index) {
        let current = this.firstNode

        for (let i = 0; i < index; i++) {
            current = current.nextNode

            if (current === null)
                return null
        }

        return current
    }

    printNodes = function () {
        let current = this.firstNode

        while (current) {
            console.log(current.data)
            current = current.nextNode
        }
    }

    search = function (value) {
        let current = this.firstNode

        while (current) {
            if (current.data === value)
                return current

            current = current.nextNode
        }

        return null
    }

    delete = function (index) {
        let current = this.firstNode
        if (index < 0)
            return

        if (index === 0)
            this.firstNode = current.nextNode

        // Index - 1 one to get node right before node that is to be deleted.
        for (let i = 0; i < (index - 1); i++) {
            if (current.nextNode)
                current = current.nextNode
            else
                return
        }

        // last node in list edge case
        if(current.nextNode)
            current.nextNode = current.nextNode.nextNode
    }
}

var myList = new LinkedList()
myList.add(new LinkedListNode("test1"))
myList.add(new LinkedListNode("test2"))
myList.add(new LinkedListNode("test3"))

console.log(myList.read(0)) // test1
console.log(myList.read(3)) // test2
console.log(myList.read(4)) // null
console.log(myList.search("test2")) // LinkedListNode (data: "test2")
console.log(myList.search("test4")) // null

myList.printNodes()
myList.delete(3)
myList.printNodes()

var myDoubleList = new DoublyLinkedList()
// myDoubleList.add(new LinkedListNode("doubleTest1"))
// myDoubleList.add(new LinkedListNode("doubleTest2"))
// myDoubleList.add(new LinkedListNode("doubleTest3"))