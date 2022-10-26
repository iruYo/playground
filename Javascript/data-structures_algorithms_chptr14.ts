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
    previousNode
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

    add = function (value) {
        let node = new DoublyLinkedListNode(value)

        if (this.firstNode === null) {
            this.firstNode = node
            this.lastNode = node
        }
        else {
            // Setup new node's previous node with last node in list
            node.previousNode = this.lastNode
            // Set list's current last node's nextNode to new node
            this.lastNode.nextNode = node
            // Set list's last node to new node
            this.lastNode = node
        }
    }

    read = function (index) {

    }

    printNodesReverse = function () {
        let current = this.lastNode

        while (current) {
            console.log(current.data)
            current = current.previousNode
        }
    }

    search = function (value) {

    }

    delete = function (index) {

    }
}

class LinkedList {
    firstNode
    constructor() {
        this.firstNode = null
    }

    add = function (value) {
        let node = new LinkedListNode(value)

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
        if (current.nextNode)
            current.nextNode = current.nextNode.nextNode
    }
}

var myList = new LinkedList()
myList.add("test1")
myList.add("test2")
myList.add("test3")

console.log(myList.read(0)) // test1
console.log(myList.read(2)) // test3
console.log(myList.read(3)) // null
console.log(myList.search("test2")) // LinkedListNode (data: "test2")
console.log(myList.search("test4")) // null

myList.printNodes()
myList.delete(3)
myList.printNodes()

var myDoubleList = new DoublyLinkedList()
myDoubleList.add("doubleTest1")
myDoubleList.add("doubleTest2")
myDoubleList.add("doubleTest3")

myDoubleList.printNodesReverse()