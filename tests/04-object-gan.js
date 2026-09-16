// gán trong object
const student = {name: "Lan" , age: 23};

console.log(student.name);
student.name = "Phong";
console.log(student.name);
console.log(student.age);
student.age = 20;
console.log(student.age);

// Thêm value cho key chưa tạo
console.log(student);
student.favorite =  'Playing games';
console.log(student);

delete student.favorite
console.log(student);