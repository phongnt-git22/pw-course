// Bài học: hàm every trong Javascript
const numbers = [2, 4, 6, 8, 10];

// Kiểm tra tất cả là số chẵn?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Kiểm tra tất cả > 0? 
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// Kiểm tra tất cả > 5
const allGreaterThan5 = numbers.every(num => num > 5);
console.log(allGreaterThan5); // false (vì 2 và 4 không > 5)

const checkWithLog = numbers.every(num => {
    console.log(`checking: ${num}`);
    return num < 5;
})

const orderItems = [
    {product: 'iphone 15', quantity: 1, inStock: 15, price: 25000000},
    {product: 'AirPods', quantity: 2, inStock: 10, price: 40000000},
    {product: 'Case', quantity: 1, inStock: 20, price: -500000},
    {product: 'Laptop', quantity: 11, inStock: 20, price: 23000000},

];
// Check xem tất cả sản phẩm còn đủ hàng ko?
const allAvailable = orderItems.every(item => item.inStock >= item.quantity);
console.log(allAvailable); // true

// Tất cả sản phẩm có giá hợp lệ 
const allValidPrices = orderItems.every(item => item.price > 0);
console.log(allValidPrices); // false

// Kiểm tra giới hạn số lượng sp (maximum 10 cho mỗi sp)
const withinQuantityLimit = orderItems.every(item => item.quantity <= 10);
console.log(withinQuantityLimit); // false


