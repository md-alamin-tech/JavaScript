let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });
let nums = [20, 30, 45, 55];
arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
})


// arr.forEach((num) => {
//     console.log(num * num);
// });

let calcSquare = (num) => {
    console.log(num * num);
}

nums.forEach(calcSquare);

