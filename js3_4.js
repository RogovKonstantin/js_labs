function isWonderful(matrix) {
    let rowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
    rowSum += matrix[0][j];
}
    for (let i = 1; i < matrix.length; i++) {
        let rowSumCurrent = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            rowSumCurrent += matrix[i][j];
        }
        if (rowSumCurrent !== rowSum) {
            return false;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }
        if (colSum !== rowSum) {
            return false;
        }
    }

    return true;
}
console.log(isWonderful([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));    
console.log(isWonderful([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(isWonderful([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));