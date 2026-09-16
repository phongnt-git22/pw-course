// Hàm Find trong Array
const users = [
    {id: 101, name: 'An', role: 'admin', active: true },
    {id: 102, name: 'Bình', role: 'user', active: false },
    {id: 103, name: 'Cường', role: 'user', active: true },
    {id: 104, name: 'Dũng', role: 'admin', active: true },
]

// Tìm user theo ID
const userID = 105;
const user = users.find(user => user.id === userID);
console.log(user);

// Tìm admin đầu tiên
const firstAdmin = users.find(u => u.role === 'admin');
console.log(firstAdmin); // 

// Tìm user ko active
const inActive = users.find(user => !user.active);
console.log(inActive);