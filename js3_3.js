function rotate(arr, num) {
    let result = new Array(arr.length);
    num = num % arr.length;
    for (let i = 0; i < arr.length; i++) {
        result[(i - num + arr.length) % arr.length] = arr[i];
    }
    return result;
}
console.log(rotate([51, 47, 32, 61,21], 2));
console.log(rotate([32, 21, 61, 1], 4));
console.log(rotate([2, 4, 15, 31], 5));