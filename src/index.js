module.exports = function multiply(first, second) {
  var arrFirst = Array.from(first);
  var arrSecond = Array.from(second);
  var arrRes = [];
  var fL = arrFirst.length;
  var sL = arrSecond.length;
  arrRes.length = fL + sL;
  var rL = arrRes.length;
  arrRes.fill(0);
  var temp = 0;
  var arrTemp = [];
  arrTemp.fill(0);
  arrTemp.length = rL;
  for (var i = 0; i < rL; i++) {
      arrTemp[i] = [];
      arrTemp[i].length = rL;
      arrTemp[i].fill(0);
  }
  for (var i = 1; i <= rL; i++) {
      for (var j = 1; j <= i; j++) {
          var k = i - j + 1;
          if(sL >= k && fL >= j) {
              temp += (arrFirst[fL-j]*arrSecond[sL-k] + arrTemp[j-1][k-1])%10;
              arrTemp[j][k] = Math.trunc((arrFirst[fL-j]*arrSecond[sL-k] + arrTemp[j-1][k-1])/10);
          }
      }
      arrRes[rL-i] = temp%10;
      temp = Math.trunc(temp/10);
  }
  var str = arrRes.toString().split(',').join('');
  if (str.charAt(0) === '0')
      str = str.substring(1);
  return str;
}