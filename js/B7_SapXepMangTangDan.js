// Sắp xếp mảng`
document.querySelector('#btnSapXep').onclick = () => {
  arrMain.sort((a, b) => a - b);
  document.querySelector('#KetQuaSapXep').innerHTML =
    '[' + arrMain.toString() + ']';
};
