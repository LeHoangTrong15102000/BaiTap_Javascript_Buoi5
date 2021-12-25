document.querySelector('#btnSNT').onclick = () => {
  for (var index = 0; index < arrMain.length; index++) {
    var arrNum = arrMain[index];
    var arrNumSNT = '';
    for (var i = 2; i < arrNum - 1; i++) {
      if (n % i == 0) {
        arrNumSNT = arrNum;
      }
    }
  }
};
