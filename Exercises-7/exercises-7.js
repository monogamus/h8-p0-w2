// 1. Menyusun Barisan Bintang
var counter = 0;
var rows1 = 5;
var tampung = "*";
for ( rows1; rows1 > counter; rows1-- ) {
  console.log(tampung);
}

console.log("");


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var bintang = "";
var rows2 = 5;
for ( rows2; rows2 >= 0; rows2-- ) {
  for ( var j = 5; j > 0; j-- ) {
    bintang = bintang + "*";
  }
    console.log(bintang);
    var bintang = "";
}

console.log("");


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
var bintang = "";
for ( rows3; rows3 > 0; rows3-- ) {
  for ( var j = 5; j >= rows3; j-- ) {
      bintang = bintang +"*";
  }
  console.log(bintang);
  var bintang= "";
}