// bài tập javascript về mảng

// Thêm giá trị người dùng nhập vào mảng

var arrMain = [];
document.querySelector('#btnThemSo').onclick = function () {
  var number = Number(document.querySelector('#soNhap').value);
  arrMain.push(number);
  document.querySelector('#mainArray').innerHTML =
    '[' + arrMain.toString() + ']';
};
