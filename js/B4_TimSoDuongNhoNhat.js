// Tìm số dương nhỏ nhất trong mảng
document.querySelector('#btnTimSoDuongMin').onclick = () => {
  let minIndex = Infinity;
  for (let index = 0; index <= arrMain.length - 1; index++) {
    const arrNum = arrMain[index];
    if (arrNum < minIndex && arrNum > 0) {
      minIndex = arrNum;
    }
  }
  document.querySelector('#txtTimSoDuongMin').textContent = minIndex;
};
