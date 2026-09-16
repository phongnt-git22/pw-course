// C1: khai báo Object Literal
let xe = {
    hang: "Honda",
    mau: "Trắng",
    namSanXuat: 2023
};

const xe1 = {
    
    hang: "Toyota",
    mau: "Đen",
    namSanXuat: 2022
}

// C2: khai báo New Object
let xe3 = new Object()
xe3.hangXe = "Toyota";
xe3.mau = "Trắng";
xe3.namSanXuat = 2024;

console.log('hangXe: ', xe3.hangXe);
console.log("Màu xe: ", xe3.mau);
console.log("Năm sản xuất: ", xe3.namSanXuat);
