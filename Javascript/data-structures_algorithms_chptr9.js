class Stack {
    #array;

    constructor() {
        this.#array = []
    }

    push(elm) {
        this.#array.push(elm)
    }

    pop() {
        return this.#array.pop()
    }
}

function reverse(string) {
    var stack = new Stack
    var result = ""

    _ = [...string].forEach(char => {
        stack.push(char)
    });

    var lastElement = ""
    do {
        lastElement = stack.pop()
        if (lastElement != undefined) {
            result += lastElement
        }
    } while (lastElement)

    return result
}

var testReverse = reverse("asdf")