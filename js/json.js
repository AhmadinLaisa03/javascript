document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    let tblmenu_fetch = "js/tblmenu.json";
    fetch(tblmenu_fetch)
    .then(response => response.json())
    .then(json => {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>Harga</th>";
        json.forEach(
            element => {
                output += `<tr>
                    <td>${element.menu}</td>
                    <td>${element.harga}</td>
                </tr>`;
            }
        );
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;
    })  

}





// JSON

// let tblmenu = [
//     // JSON yang ditulis dalam bentuk object
//     {
//         "idmenu": 1,
//         "idkategori": 1,
//         "menu" : "soto" //key dan value terakhir tidak perlu ditambah kan koma
//     }, //koma memisahkan data pertama dan data kedua
//     {
//         "idmenu": 2,
//         "idkategori": 2,
//         "menu" : "pecel"
//     }
// ];