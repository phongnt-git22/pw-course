// hàm sort trong Javascript
const fruit = ['banana', 'apple', 'watermelon', 'orange', 'grape'];
fruit.sort();
console.log(fruit);
// BUG phổ biến: sort số không đúng theo mặc định
const numbers = [10, 5, 40, 25, 1000, 1];
numbers.sort();
console.log(numbers); // [ 1, 10, 1000, 25, 40, 5 ] -> SAI!
// Vì sort mặc định chuyển thành string: "10" < "5"

// Dùng function compare trả về: 
const numbers1 = [8, 3, 20, 50, 200, 1];
numbers1.sort((a,b) => b - a); // giảm dần
console.log(`Mảng sau khi sắp xếp giảm dần là: ${numbers1}`);

numbers1.sort((a,b) => a - b); // tăng dần
console.log(`Mảng sau khi sắp xếp tăng dần là: ${numbers1}`);