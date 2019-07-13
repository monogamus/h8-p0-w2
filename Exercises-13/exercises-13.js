// Logic Challenge - X dan O
function xo(str) {
    var hitungx ="";
    var hitungo ="";
    for ( var i = 0; i < str.length; i++ ) {
      if( str[i] === "x") {
        hitungx = hitungx + 1;
      } else {
        hitungo = hitungo + 1;
      }
    }
      if( hitungo === hitungx ) {
       return true; 
      } else {
       return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true