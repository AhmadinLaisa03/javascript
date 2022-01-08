// membuat func dengan cara biasa
let fungsi = function () {
    console.log("sedang belajar fungsi di js");
}

fungsi();

// membuat func dengan arrowfunction
let arrow = (nama, bahasa) => {
    let kembali = console.log(nama + " sedang belajar " + bahasa);
    return kembali;
}

arrow("saya", "PHP");

// arrowfunction dengan 1 parameter

let satuParam = (n) => n ** 2;

console.log(satuParam(2));

// arrowfunction tanpa parameter

// let noParam = () => console.log("No Ingfo");
let noParam = () => (lorem = "ipsum");

console.log(noParam());

// arr. function dengan pengujian

let input = 59;

let uji = input >= 60 ? () => (predikat = "LULUS") : () => (predikat = "GAGAL");
console.log(uji());