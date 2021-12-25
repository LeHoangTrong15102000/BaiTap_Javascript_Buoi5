// Tìm số nhỏ nhất trong mảng
document.querySelector('#btnTimSoMin').onclick = () => {
  let minIndex = Infinity;
  for (let index = 0; index < arrMain.length; index++) {
    const arrNum = arrMain[index];
    if (arrNum < minIndex) {
      minIndex = arrNum;
    }
  }
  document.querySelector('#txtTimSoMin').textContent = minIndex;
};
