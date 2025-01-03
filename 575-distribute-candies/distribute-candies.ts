const incrementMapValue = (map: Map<number, number>, key: number) => {
    if (map.has(key)) {
        map.set(key, map.get(key) + 1)
    } else {
        map.set(key, 1)
    }
}

function distributeCandies(candyType: number[]) {
    const map = new Map<number, number>()

    for (const type of candyType) {
        incrementMapValue(map, type)
    }

    return Math.min(map.size, candyType.length / 2)
}