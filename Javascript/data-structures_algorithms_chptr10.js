var testArray = [1, 2, 3, [4, 5], 6, [7, 8, 9, [10, 11, [12, 13], 14, 15], 16], 17, [18], 19, 20]

function printNr(array) {
    array.forEach(elm => {
        if (typeof (elm) === "number")
            console.log(elm)
        else
            printNr(elm)
    })
}

printNr(testArray)