// Đếm số dương trong mảng
document.querySelector('#btnDemSoDuong').onclick = () => {
  let countNum = 0;
  for (let index = 0; index < arrMain.length; index++) {
    const arrNum = arrMain[index];
    if (arrNum > 0) {
      countNum++;
    }
  }
  document.querySelector('#txtDemSoDuong').innerHTML = countNum;
};
