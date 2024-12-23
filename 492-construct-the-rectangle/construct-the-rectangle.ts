function constructRectangle(area: number) {
    let width = Math.floor(Math.sqrt(area))
    while (area % width !== 0) width--
    return [area / width, width]
}