// let arr = [1, 2, 3, 4];

// let newArr = arr.map((num) => {
//     return num * 2;
// });

// console.log(newArr);

const user = [
    { name: "Al amin", age: 25 },
    { name: "Rabeya", age: 27 },
    { name: "Robi", age: 25 }
];

const name = user.map((user) => {
    return user.name;
});

console.log(name);