function greatestProduct(numbers) {
    numbers.sort((a, b) =>  a - b)
    return numbers.pop() * numbers.pop() * numbers.pop()
}
greatestProduct([5, 2, 3, 1, 4])

function missingNumber(numbers) {
    numbers.sort((a, b) =>  a - b)

    for (let i = 0; i <= numbers.length; i++) {
        const element = numbers[i];

        if (element !== i)
            return i
    }
}
missingNumber([0, 1, 10, 2, 3, 5, 4, 6, 7, 8, 11, 12])

function greatestNumberNpow2(numbers) {
    let greatest = -1

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > greatest)
            greatest = numbers[i]

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] > greatest)
                greatest = numbers[j]
        }
    }

    return greatest
}
greatestNumberNpow2([1, 2, 55, 4, 492, 90, 251])

function greatestNumberNLogN(numbers){
    numbers.sort((a, b) => a - b)

    return numbers.pop();
}
greatestNumberNLogN([1, 2, 55, 4, 492, 90, 251])

function greatestNumberN(numbers){
    let greatest = - 1

    numbers.forEach(element => {
        if (element > greatest)
            greatest = element
    });

    return greatest
}
greatestNumberN([1, 2, 55, 4, 492, 90, 251])