// removeFirst = (array) => {
//   const arr1 = [...array];
//   arr1.shift();
//   return arr1;
// };

// const arr = [1, 1, 1];

// console.log(removeFirst(arr));
// console.log(arr);

const users = [
    { id: 1, name: "Irfan", age: 25 },
    { id: 2, name: "Nikola", age: 19 },
    { id: 3, name: "Hamza", age: 18 },
];

// const filteredUsers = users.filter((user, index) => {
//   return user.age < 20;
// });

// elemnt, index, array;

// Array.prototype.newFilter = function (callback) {
//   const newArray = [];

//   const arrayClone = [...this];
//   for (let i = 0; i < arrayClone.length; i++) {
//     const element = arrayClone[i];

//     if (callback(element, i, this)) {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// };

Array.prototype.newFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        const element = this[i];

        if (callback(element, i, this)) {
            return element;
        }
    }

    return undefined;
};

const foundUser = users.newFind((user, index, array) => {
    return user.name === "Irfan";
});

console.log(foundUser);