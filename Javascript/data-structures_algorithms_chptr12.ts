function addUntil100(numbers) {
    if (numbers.length === 0)
        return 0

    let cur = numbers[0]
    let tailTotal = addUntil100(numbers.slice(1))

    if (cur + tailTotal > 100)
        return tailTotal
    else
        return cur + tailTotal
}

function golomb(n) {
    if (n === 1)
        return 1

    let cur = 1 + golomb(n - golomb(golomb(n - 1)))
    return cur
}

function golombMem(n, golombs = new Map()) {
    if (n === 1)
        return 1

    let mem = golombs.get(n)
    if (mem)
        return mem

    let cur = 1 + golombMem(n - golombMem(golombMem(n - 1, golombs), golombs), golombs)
    golombs.set(n, cur)

    return cur
}

function shortestPaths(x, y) {
    if (x <= 0 || y <= 0)
        return 0
    if (x === 1 || y === 1)
        return 1

    let shortestPath = shortestPaths(x - 1, y) + shortestPaths(x, y - 1)

    return shortestPath
}

function shortestPathsMem(x, y, paths = new Map()) {
    if (x <= 0 || y <= 0)
        return 0
    if (x === 1 || y === 1)
        return 1

    let mem = paths.get(x.toString() + y.toString())
    if (mem)
        return mem

    let shortestPath = shortestPathsMem(x - 1, y, paths) + shortestPathsMem(x, y - 1, paths)
    paths.set(x.toString() + y.toString(), shortestPath)

    return shortestPath
}

function timer() {
    console.time("golomb nonMem")
    console.log(golomb(30))
    console.log(console.timeEnd("golomb nonMem"))

    console.time("golomb Mem")
    console.log(golombMem(30))
    console.log(console.timeEnd("golomb Mem"))

    console.time("shortestPaths nonMem")
    console.log(shortestPaths(65, 7))
    console.log(console.timeEnd("shortestPaths nonMem"))

    console.time("shortestPaths Mem")
    console.log(shortestPathsMem(65, 7))
    console.log(console.timeEnd("shortestPaths Mem"))
}
timer()