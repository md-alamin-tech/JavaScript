// let arr = [1, 2, 3, 4, 5];

// let result = arr.find(function (currenctValue, index, arr) {
//   return currenctValue === 4;
// });

// console.log(result);

class Student {
    contructor(name, age) {
        this.name = name;
        this.age = age;
    }
test(){
    console.log("hello");
}
// exFunc(){
//     let arr = [1, 2, 3];
//     arr.find(function () {
//         this.test();
//     }, this);
    //     }
    exampleFunc() {
        let arr = [1, 2, 3, 4];
        arr.find(() => {
            this.test();
        });
    }
}

let student = new Student("Al amin", 50);
student.exampleFunc();