// function number() {
//     return 10;
// }

// console.log(number());

// arrow function

// let number = () => {
//     return 10;
// };
// console.log(number());

// let number = () => 10;
// console.log(number());


let js = {
    name: "JavaScipt",
    version: "ES6",
    features: ["Arrow functions", "let and const", "Template literals", "Destructuring", "Promises", "Async/Await"],
    libraries: ["React", "Vue", "Angular"],

    printLibraries() {
        this.libraries.forEach(function (a) {
            console.log(`${this.name} love ${a}`); 
            
            
        });
    },

    printFeature() {
        this.features.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};

js.printFeature();

js.printLibraries(); 
