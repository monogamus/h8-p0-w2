// 1. Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA");
var counter = 2;
var limit = 20;
var increment = 2;
while( counter <= limit ) {
  console.log(counter+" - I love coding");
  counter += increment;
}

console.log("");
console.log("LOOPING KEDUA");

var counter = 20;
var limit = 2;
var decrement = 2;
while ( counter >= limit ) {
  console.log(counter+" - I will become fullstack developer");
  counter -= decrement;
}


// 2. Melakukan Looping Menggunakan For
console.log("");
console.log("LOOPING PERTAMA");
var counter = 1;
var limit = 20;
var increment = 1;
for ( counter; counter <= limit; counter +=increment ) {
  console.log(counter+" - I love coding");
}

console.log("");
console.log("LOOPING KEDUA");

var counter = 20;
var limit = 0;
for ( counter; counter > limit; counter-- ) {
  console.log(counter+ " - I will become fullstack developer");
}

console.log("");


// 3. Angka Ganjil dan Genap
var counter = 1;
var limit = 100;
for ( counter; counter <= limit; counter++ ) {
  if ( counter % 2 === 0) {
    console.log(counter+" GENAP");
  } else {
    console.log(counter+" GANJIL");
  }
}

var counter = 1;
var limit = 100;
console.log("");
for ( counter; counter <= limit; counter+=2 ) {
  if ( counter % 3 === 0 ) {
    console.log(counter+" kelipatan 3");
  }
}  

console.log("");
var counter = 1;
var limit = 100;
for ( counter; counter <= limit; counter+=5 ) {
  if ( counter % 6 === 0 ) {
    console.log(counter+" kelipatan 6");
  }
}

console.log("");
var counter = 1;
var limit = 100;
for ( counter; counter <= limit; counter+=9 ) {
  if ( counter % 10 === 0 ) {
    console.log(counter+" kelipatan 10");
  }   
}