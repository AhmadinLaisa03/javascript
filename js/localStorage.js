// JS localstorage
// key dan value yang disimpan dengan localstorage, tidak akan terhapus hingga dihapus oleh developer nya

// set localstorage dengan key coba dan value 10
localStorage.setItem("coba", 10);
localStorage.setItem("test", "belajar localstorage di JS");
localStorage.setItem("length", "belajar menggunakan length");

// menampilkan isi localstorage dengan method getItem()
console.log(localStorage.getItem("coba"));// 10
console.log(localStorage.getItem("test"));// belajar localstorage di JS

// menghapus isi localstorage dengan method removeItem()
// localStorage.removeItem("coba");
// localStorage.removeItem("test");
    // clear, menghapus segalanya
    // localStorage.clear();

// key(), digunakan untuk mendapatkan key dari localStorage berdasarkan index nya
console.log(localStorage.key(0));// coba
console.log(localStorage.key(1));// test

// length, digunakan untuk menampilkan jumlah data yang tersimpan di localStorage
// length bukan function
console.log(localStorage.length);
