function countElementInArray(strings: Array<String>): number {
    let tally = 0

    if (strings.length === 0)
        return tally
    else
        tally += strings.shift().length

    return tally += countElementInArray(strings)
}

countElementInArray(["ab", "c", "def", "ghij"])

function evenNumbers(numbers: Array<number>, even: Array<number> = []): Array<number> {
    if (numbers.length === 0)
        return even

    let number = numbers.shift()
    if (number % 2 === 0)
        even.push(number)

    return evenNumbers(numbers, even)
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

function triangularNumbers(n: number): number {
    if (n === 0)
        return 0

    return n + triangularNumbers(n - 1)
}

triangularNumbers(8)

function indexOfX(text: string, count: number = 0): number {
    if (text.charAt(0) === "x")
        return count
    if (text.length === 0)
        return -1

    return indexOfX(text.substring(1), count + 1)
}

indexOfX("abcdefghijkxlmnopxqrstuvwyz")

function shortestPaths(x: number, y: number): number {
    if (x <= 0 || y <= 0)
        return 0
    if (x === 1 || y === 1)
        return 1

    return shortestPaths(x - 1, y) + shortestPaths(x, y - 1)
}

shortestPaths(9, 3)