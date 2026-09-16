// C1: Array Literal 
const diem = [10, 9, 7.5, 6, 5, 3];
// C2: Dùng New Array()
const traiCay = new Array("Táo", "Cam", "Xoài");

// Lấy số lượng phần tử
const monHoc = ["Toán", "Lý", "Hóa", "Anh", "Tin", "Văn"];
console.log(monHoc);
console.log(monHoc[0]); // Toán
console.log(monHoc[2]); // Hóa
console.log(monHoc[4]); // Tin
console.log(monHoc[6]); // Undifined

// Đếm số phần tử của mảng
console.log(monHoc.length);
// Lấy phần tử cuối cùng 
console.log(monHoc[monHoc.length-1]); // Văn
console.log(monHoc[monHoc.length-3]); // Anh 

// Gán lại giá trị theo index
console.log(monHoc);
monHoc[1] = "Vật Lý";
console.log(monHoc);
monHoc[monHoc.length-2] = "Sinh học"
console.log(monHoc);