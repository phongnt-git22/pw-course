// Hàm some trong Javascript
const user = {
    name: 'Nguyễn Văn A',
    roles: ['user', 'editor']
};

const adminRoles = ['admin', 'superadmin'];
const editorRoles = ['editor', 'admin'];

// Check xem user có quyền editor ko?
const canEdit = user.roles.some(role => editorRoles.includes(role));
console.log(canEdit); // true (có role 'editor')

// Kiểm tra user có quyền admin không?
const isAdmin = user.roles.some(role => adminRoles.includes(role));
console.log(isAdmin); // false là vì trong ds role của user ko có role admin trong adminRoles

// Hàm Kiểm tra xem trong tất cả các quyền của user hiện tại 
// có ít nhất một quyền nằm trong danh sách quyền được yêu cầu không.
function hasPermission(userRoles, requiredRoles){
    return userRoles.some(role => requiredRoles.includes(role));
}
console.log(hasPermission(user.roles, ['views', 'editor'])); // true
