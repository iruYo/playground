class Heap {
    nodes
    constructor() {
        this.nodes = []
    }

    root = function (){
        this.nodes.first()
    }

    lastNode = function () {
        this.nodes.last()
    }

    lowerIndex = function(index) {
        return index * 2 + 1
    }

    higherIndex = function(index) {
        return index * 2 +1
    }

    parentindex = function(index) {
        return (index - 1) / 2
    }
}