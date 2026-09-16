const monHoc = ["Toán", "Lý", "Hóa", "Anh", "Tin"];
console.log(monHoc);

// Thêm phần tử vào cuối mảng
monHoc.push("Văn"); 
console.log(monHoc); 

// Xóa phần tử cuối cùng
const monBiXoa = monHoc.pop();
console.log("Môn bị xóa là: ", monBiXoa);
console.log(monHoc);

// thêm vào đầu mảng
monHoc.unshift("CNTT");
console.log(monHoc);

// Xóa phần tử đầu
monHoc.shift();
console.log(monHoc); // "Toán", "Lý", "Hóa", "Anh", "Tin"
