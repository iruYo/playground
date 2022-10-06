function intersect(array1, array2) {
    var result = [];
    var array1Map = new Map()

    array1.forEach(element => {
        array1Map.set(element, true)
    });

    array2.forEach(element => {
        if (array1Map.get(element)) {
            result.push(element)
        }
    });

    return result;
}

var intersectTest = intersect([1, 2, 3, 4, 5, 8, 9, 11, 1293, 283], [2, 1293, 4, 6, 9, 3893])

function firstDuplicate(array) {
    var temp = new Map()
    var duplicate = ""
    array.some(element => {
        if (temp.get(element)) {
            duplicate = element
            return duplicate
        }
        temp.set(element, true)
    });

    return duplicate
}

var firstDuplicateTest = firstDuplicate(["A", "B", "C", "D", "C", "E", "A"])

function missingLetter(input) {
    var alphabet = {
        "a": true, "b": true, "c": true, "d": true, "e": true, "f": true, "g": true, "h": true, "i": true,
        "j": true, "k": true, "l": true, "m": true, "n": true, "o": true, "p": true, "q": true, "r": true,
        "s": true, "t": true, "u": true, "v": true, "w": true, "x": true, "y": true, "z": true
    }

    Array.from(input).forEach(char => {
        if (alphabet[char] && char != " ") {
            alphabet[char] = false
        }
    });

    var missing = ""
    Object.entries(alphabet).some(([key, value]) => {
        if (value) {
            missing = key
        }
    })
    
    return missing;
}

var missingLetterTest = missingLetter("the quick brown box jumps over a lazy dog")

