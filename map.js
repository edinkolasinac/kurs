const array = [
    { id: 1, name: "Suad", address: { street: "Hotkovo", number: 22 } },
    { id: 2, name: "Irfan", address: { street: "Prvog maja", number: 42 } },
    { id: 3, name: "Ramiz", address: { street: "Potok", number: 21 } },
    { id: 4, name: "Ahmed", address: { street: "Bukres", number: 25 } },
    { id: 5, name: "Samil", address: { street: "Rifata budzovica", number: 27 } },
    { id: 6, name: "Mejla", address: { street: "Hercegovacka", number: 28 } },
    { id: 7, name: "Ajsa", address: { street: "Potok 2", number: 27 } },
];

// const newArray = array.map((user, index) => {
//   return user.address;
// })

// const newArray = array
//   .filter((user) => user.address.number > 25)
//   .map((user) => user.address);

// value/element, index, array
// Array.prototype.newMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];

//     const callbackResult = callback(element, i, this);
//     arr.push(callbackResult);
//   }
//   return arr;
// };

// [1, 2, 3].map((value) => value * 2);
// [3, "sd"].newMap(() => undefined);

// const newArray = array
//   .filter((user) => user.address.number > 25)
//   .map((user) => user.address);

const newArray2 = array.reduce((result, value, index, array) => {
    if (value.address.number > 25) {
        result.push(value.address);
    }
    return result;
}, []);

// [1, 2, 3, 4, 5, 6].reduce((result, value) => {
//   return result + value;
// });

Array.prototype.newReduce = function (callback, initialValue) {
    let result = initialValue ? initialValue : this[0];

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (initialValue) {
            result = callback(result, element, i, this);
            continue;
        }

        if (!initialValue && i === 0) {
            continue;
        }

        result = callback(result, element, i, this);
    }
    return result;
};

const first = [1].newReduce((result, value) => result + value, 10);
console.log(first);