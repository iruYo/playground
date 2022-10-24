class listNode {
    data
    nextNode
    constructor(data) {
        this.data = data
        this.nextNode = null
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

    }

    delete = function (index) {

    }
}

var node1 = new listNode("test1")
var node2 = new listNode("test2")
var node3 = new listNode("test3")

var myList = new LinkedList()
myList.add(node1)
myList.add(node2)
myList.add(node3)

console.log(myList.read(0)) // test1
console.log(myList.read(1)) // test2
console.log(myList.read(2)) // test3
console.log(myList.read(3)) // null
console.log(myList.read(4)) // null

myList.printNodes()