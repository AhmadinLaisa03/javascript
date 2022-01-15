let btn = document.querySelectorAll(".btn-angka > button");
let mat = document.querySelectorAll(".btn-mat > button");
let tampil = document.querySelector("#tampil");
let pilihan = null;
let x;
let y;

// console.log(mat);

// tampil.value = btn[8].innerHTML;

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        // console.log(btn[i].innerHTML);
        if (tampil.value == "0") {
            tampil.value = btn[i].innerHTML;
        } else {
            tampil.value += btn[i].innerHTML;
        }
    }
}

mat[0].onclick = function() {
    tampil.value = "0";
}

mat[1].onclick = function() {
    pilihan = "tambah";
    // memasukkan inputan pertama ke dalam variabel x
    x = tampil.value;
    // setelah menekan button tambah, nilai tampil akan kembali 0 untuk selanjutnya di masukkan ke dalam variabel y
    tampil.value = 0;
}

mat[2].onclick = function() {
    pilihan = "kurang";
    x = tampil.value;
    tampil.value = 0;
}

mat[3].onclick = function() {
    pilihan = "kali";
    x = tampil.value;
    tampil.value = 0;
}

mat[4].onclick = function() {
    pilihan = "bagi";
    x = tampil.value;
    tampil.value = 0;
}

mat[5].onclick = function () {
    // pemberian nilai variabel y
    y = tampil.value;

    // menjalankan operasi hitung yang diinginkan dengan function kalkulator 
    tampil.value = kalkulator(pilihan);
}

// fungsi kalkulator

let kalkulator = function(pilihan) {
    if (pilihan != null) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(x) + parseFloat(y);
                break;
            case "kurang":
                hasil = parseFloat(x) - parseFloat(y);
                break;
            case "kali":
                hasil = parseFloat(x) * parseFloat(y);
                break;
            case "bagi":
                hasil = parseFloat(x) / parseFloat(y);
                break;
            
            // parse float diperlukan karena variabel x dan y masih ber-tipe data string

            default:
                break;
        }
    }
    return hasil;
}