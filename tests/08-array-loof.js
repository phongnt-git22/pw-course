let diemSo = [8, 6, 9, 7, 10];
// Học sinh 1: 8 điểm
// Học sinh 2: 6 điểm
// Học sinh 3: 9 điểm
// Học sinh 4: 7 điểm
// Học sinh 5: 10 điểm

for (let i = 0; i < diemSo.length; i++){
    console.log(`Học sinh ${i+1}: ${diemSo[i]} điểm`);
}

for (let i = 0; i < diemSo.length; i -= 5){
    console.log(`Học sinh ${i+1}: ${diemSo[i]} điểm`);
}
