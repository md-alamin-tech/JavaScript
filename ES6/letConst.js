let count = 0;
function increment() {
  count++;
}

increment();
console.log(count);

let incrementArrow = () => {
  count++;
};

incrementArrow();

console.log(incrementArrow);
{
  let count = 0;
  function increment() {
    count++;
  }
}

const obj = {
  name: "al",
  age: 25,
};
obj.name = "al amin";


console.log(obj.name);


let arr = [1, 2, 3, 4, 5];

arr=[...arr, 6];

console.log(arr);

const array = [1, 2, 3, 4, 5];
array.push(6);
array[0] = 10;
console.log(array);
