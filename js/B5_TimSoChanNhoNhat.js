// Tìm số chẵn nhỏ nhất trong mảng
document.querySelector('#btnTimChanMin').onclick = () => {
  let index = arrMain.length;
  while (index--) {
    if (arrMain[index] % 2 == 0 && arrMain[index] > 0) {
      document.querySelector('#txtTimChanMin').innerHTML = arrMain[index];
      break;
    } else {
      document.querySelector('#txtTimChanMin').innerHTML = '-1';
    }
  }
};
