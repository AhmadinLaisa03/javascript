let hari = 8;
let hasil;

switch (hari) {
    case 1:
        hasil = "minggu";
        break;
    
    case 2:
        hasil = "senin";
        break;
    
    case 3:
        hasil = "selasa";
        break;
    
    case 4:
        hasil = "rabu";
        break;
    
    case 5:
        hasil = "kamis";
        break;
    
    case 6:
        hasil = "jum'at";
        break;
    
    case 7:
        hasil = "sabtu";
        break;
    
    default:
        hasil = "hari tidak valid";
        break;
}
console.log(hasil);
