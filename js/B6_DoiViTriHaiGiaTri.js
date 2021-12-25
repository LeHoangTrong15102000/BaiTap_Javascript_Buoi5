document.querySelector('#btnDoiViTri').onclick = () => {
  var viTri1 = document.querySelector('#viTriDau').value;
  var viTri2 = document.querySelector('#viTriSau').value;
  var arrX = arrMain[viTri1];
  arrMain[viTri1] = arrMain[viTri2];
  arrMain[viTri2] = arrX;
  document.querySelector('#txtKetQuaMang').innerHTML =
    '[' + arrMain.toString() + ']';
};
