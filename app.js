function oddOrEven(array) {
    // sum the array, check if empty
    let mySum = array.reduce(add, 0);

    function add(accumulator, a) {
        return accumulator + a;
    }

    if (mySum % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log(oddOrEven([0])); // even
console.log(oddOrEven([1])); // odd
console.log(oddOrEven([])); // even
console.log(oddOrEven([0, 1, 5])); // even
console.log(oddOrEven([0, -1, -5])); // even