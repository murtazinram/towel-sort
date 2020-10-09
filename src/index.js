// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return []
    let direction = 1;
    for (const item of matrix) {
        item.sort((a, b) => direction * (a - b))
        direction *= -1
    }
    return matrix.flat()
}
