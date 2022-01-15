// array => variabel yang dapat menampung lebih dari satu nilai dengan berbagai tipe data, kemudian objek dsb.

let arrObject = [
    { nama: 'adin', nilai: 90 },
    { nama: 'joko', nilai: 70 }
];
let arrString = ['adit', 'risky', 'rehan'];
let mapel = ['MTK', 'IPA', 'B Indo'];
let angka = [1, 2, 5, 85, 3, 6, 6, 8, 0];

// arr. method concat
// console.log(arrString.concat(mapel));

// arr. method foreach
// mapel.forEach(function (value, key) {
//     console.log("mapel ke-" +key+ " adalah " +value);
// })
// mapel.forEach((value, key) => console.log("mapel ke-" + key + " adalah " + value));

// filter
// arrObject.filter((a) => a.nilai > 70 ? console.log(a) : null);

// map
// let siswa = arrObject.map((a) => a.nama);
// let siswa = arrObject.map(function(value){
//     return [value.nama, value.nilai];
// });

// console.log(siswa);

// sort
// mapel.sort();
// console.log(mapel);
// angka.sort((a, b) => a - b);
// console.log(angka);

// reduce
// let hasil = arrObject.reduce(function (a, b) {
//      return a += b.nilai;
// }, 5);
// // let hasil = arrObject.reduce((a, b) => a += b.nilai, 0);
// console.log(hasil);


// push
// arrString.push('galih');
// arrObject.push({ nama: 'galih', nilai: 80 });

// pop
// arrString.pop();
// arrObject.pop();

// shift
// arrString.shift();
// arrObject.shift();

// unshift
// arrObject.unshift({ nama: 'galih', nilai: 80 });
// arrString.unshift('galih');

// splice
// arrObject.splice(0, 1);
// arrString.splice(0, 1);

// slice
// let hasilSlice1 = arrObject.slice(0, 1);
// let hasilSlice2 = arrString.slice(0, 1);

// console.log(hasilSlice1);
// console.log(hasilSlice2);
// ----------------------------------------------------- //

// console.log(arrObject[0].nama);
// console.log(arrString[0]);

// console.log(arrObject);
// console.log(arrString);
