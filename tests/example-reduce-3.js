// Hàm reduce trong JavaScript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
},0);

console.log(sum); // 15

const cart = [
    {product: 'Laptop', price: 20000000, quantity: 1},
    {product: 'Mouse', price: 300000, quantity: 2},
    {product: 'Keyboard', price: 800000, quantity: 1},
    {product: 'Monitor', price: 5000000, quantity: 2},
];
// Tính tổng tiền giỏ hàng
const totalAmount = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log(`Tổng tiền: ${totalAmount.toLocaleString('vi-Vn')} VND`); // tổng tiền: 31.400.000đ

// Hiển thị tổng tiền dạng USD
console.log(`Tổng tiền: ${totalAmount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })}`
);
// Hiển thị tổng tiền dạng AUD
console.log(`Tổng tiền: ${totalAmount.toLocaleString('en-AU', {
        style: 'currency',
        currency: 'AUD'
    })}`
);

// Tính tổng số lượng sản phẩm 
const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
console.log(`Tổng số sản phẩm: ${totalItems}`) 