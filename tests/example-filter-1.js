// Hàm filter 
const products = [
    {name: 'iphone 15', price: 28000000, category: 'phone', inStock: true},
    {name: 'Samsung S24', price: 22000000, category: 'phone', inStock: false},
    {name: 'Ipad Pro', price: 35000000, category: 'tablet', inStock: true},
    {name: 'Macbook Air', price: 32000000, category: 'laptop', inStock: true},
    {name: 'Airpod', price: 40000000, category: 'accessory', inStock: true},
];
// Lọc sản phẩm còn hàng
const availableProducts = products.filter(products => products.inStock);
console.log(availableProducts);

// Lọc sản phẩm hết hàng
const outOfStockProducts = products.filter(product => !product.inStock);
console.log("Sản phẩm hết hàng: ", outOfStockProducts);


// Lọc sản phẩm với giá dưới 30 triệu
const affordableProducts = products.filter(products => products.price < 30000000);

// Lọc nhiều điều kiện: điện thoại còn hàng
const availablePhones = products.filter(products => 
    products.category === 'phone' && products.inStock
);
console.log(availablePhones);

// Lọc ra sản phẩm là điện thoại và hết hàng
const unavailablePhones = products.filter(product => product.category === 'phone' && !product.inStock);
console.log(unavailablePhones);

// Lọc ra sản phẩm là laptop và còn hàng
const availableLaptops = products.filter(products => products.category === 'laptop' && products.inStock);
console.log('Sản phẩm laptop còn hàng: ', availableLaptops);