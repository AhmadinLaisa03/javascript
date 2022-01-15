// JS sessionStorage
// key dan value yang disimpan dengan sessionStorage, tidak akan terhapus hingga browser di restart

// set sessionStorage dengan key coba dan value 10
sessionStorage.setItem("coba", 10);
sessionStorage.setItem("test", "belajar sessionStorage di JS");
sessionStorage.setItem("length", "belajar menggunakan length");

// menampilkan isi sessionStorage dengan method getItem()
console.log(sessionStorage.getItem("coba"));// 10
console.log(sessionStorage.getItem("test"));// belajar sessionStorage di JS

// menghapus isi sessionStorage dengan method removeItem()
// sessionStorage.removeItem("coba");
// sessionStorage.removeItem("test");
    // clear, menghapus segalanya
    // sessionStorage.clear();

// key(), digunakan untuk mendapatkan key dari sessionStorage berdasarkan index nya
console.log(sessionStorage.key(1));// coba
console.log(sessionStorage.key(2));// test

// length, digunakan untuk menampilkan jumlah data yang tersimoan di sessionStorage
// length bukan function
console.log(sessionStorage.length);
