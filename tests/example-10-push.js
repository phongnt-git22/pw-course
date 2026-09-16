const hangXe = ['Honda', 'Yamaha', 'BMW', 'Mercedes']

const newLength = hangXe.push('Toyota'); // thêm phần tử vào cuối mảng
console.log(newLength);
console.log(hangXe);

// Push nhiều phần tử cùng lúc
hangXe.push('Ford', 'Ferrari');
console.log(hangXe); // ['Honda', 'Yamaha', 'BMW', 'Mercedes', 'Toyota', 'Ford', 'Ferrari']
