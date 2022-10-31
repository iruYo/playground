class BstNode {
    value
    lower
    higher
    constructor(value) {
        this.value = value
        this.lower = null
        this.higher = null
    }
}

class BinarySearchTree {
    root
    constructor() {
        this.root = null
    }

    insert = function (value, node = this.root) {
        if (this.root === null) {
            this.root = new BstNode(value)
            return
        }

        if (value < node.value) {
            if (node.lower === null)
                node.lower = new BstNode(value)
            else
                this.insert(value, node.lower)

            return
        }

        if (value > node.value) {
            if (node.higher === null)
                node.higher = new BstNode(value)
            else
                this.insert(value, node.higher)

            return
        }
    }

    max = function (node = this.root) {
        if (node.higher)
            return this.max(node.higher)
        else
            return node.value

    }

    search = function (value, node = this.root) {
        if (value === node.value || node === null)
            return node
        
        if (value < node.value)
            return this.search(value, node.lower)

        if (value > node.value) 
            return this.search(value, node.higher)
    }

    delete = function(value, node = this.root) {
        // todo
    }
}

let numbers = [6, 9, 2, 4, 8, 5555, 1, 3, 0, 7, 5, 10]
let myBST = new BinarySearchTree()

numbers.forEach(element => {
    myBST.insert(element)
});

console.log(myBST.max())
console.log(myBST.search(11))
console.log("done")