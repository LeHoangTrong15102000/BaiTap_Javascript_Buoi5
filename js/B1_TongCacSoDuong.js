document.querySelector('#btnTinhTongDuong').onclick = function () {
  let tongNum = 0;
  for (let index = 0; index < arrMain.length; index++) {
    const arrNum = arrMain[index];
    if (arrNum > 0) {
      tongNum += arrNum;
    }
  }
  document.querySelector('#txtTongSoDuong').textContent = tongNum;
};
