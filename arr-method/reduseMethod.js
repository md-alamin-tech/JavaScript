let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
    return res + curr;
});

const largest = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(largest);
console.log(output);