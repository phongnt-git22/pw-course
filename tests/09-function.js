function chaoMung(soThuTu, tenBaiHoc){
    console.log("===========================================");
    console.log("Xin chào! Chào mừng bạn đến với HocTest.com");
    console.log("===========================================");
    console.log(`Lesson ${soThuTu}: ${tenBaiHoc}`);
}
function NgoiSao(){
    console.log("⭐⭐⭐⭐⭐");
}
function demNguocPhongTen(){
    console.log("3....");
    console.log("2... ");
    console.log("1... ");
    console.log("🚀 phóng ");
}
// gọi hàm 
demNguocPhongTen();

chaoMung(1, "Bài học Array");
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

chaoMung(2, "Bài học về Object");
let sinhVien = {
    hoTen: "Phong",
    tuoi: 22,
    diaChi: {
        soNha: "12",
        Duong: "Lê Lợi",
        thanhPho: {
            ten: "TP. HCM",
            maBuuDien: 700000
        }
    }
};
console.log(sinhVien.hoTen);
console.log(sinhVien.diaChi.soNha);
console.log(sinhVien.diaChi.thanhPho.ten);
console.log(sinhVien.diaChi.thanhPho.maBuuDien);