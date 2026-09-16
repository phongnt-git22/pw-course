// dùng map trong Array
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8, 10];
// console.log(numbers); // [1, 2, 3, 4, 5];

const students = ["An", "Bình", "Cường"];
const studentLists = students.map((name, index) => ({
    id: index + 1,
    name: name,
    code: `SV00${index + 1}`
}));
console.log(students);
console.log(studentLists);

// filter với Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumbers); // [2, 4, 6, 8, 10]


