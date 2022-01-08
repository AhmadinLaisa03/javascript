// if (false) {
//     console.log("dijalankan ketika kondisi bernilai true");
// } else {
//     console.log("dijalankan ketika kondisi bernilai false");
// }

let nilai = 60;
let batasMaks = 100;
let standar = 60;
let batasMin = 0;
let lulus = "LULUS";
let gagal = "TIDAK LULUS";
let peringatan = "Nilai Tidack Valid";

// validasi nilai tidak lebih dari atau kurang dari batas yang di tentukan/nilai yang valid
if (nilai >= batasMin && nilai <= batasMaks) {
    // pengujian apakah nilai memenuhi standar kelulusan
    if (nilai >= standar) {
        console.log(lulus);
    } else {
        console.log(gagal);ö
    }
} else {
    // peringatan ketika nilai tidak valid
    console.log(peringatan);
}