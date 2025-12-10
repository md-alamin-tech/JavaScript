const user = {
  name: "Al amin",
  age: 25,
};

const { name: nam } = user;

console.log(nam);

const persone = {
  name: " al amin",
  education: {
    degree: "Masters",
  },
};

const {
  education: { degree: degree },
} = persone;
console.log(degree);

let arr = [1, 2, 3, 4];

const [a, b, c] = arr;
console.log(a, b, c);

const [, , , x] = arr;
console.log(x);

{
    let a = 10, b = 20;
    
    [a, b] = [b, a];
    console.log(a, b);
    
}

const num = [1, 2, 3, 4, 5];
const [first, ...rest] = num;
console.log(first, ...rest);