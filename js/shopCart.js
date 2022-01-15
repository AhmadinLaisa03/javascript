let tblmenu = [
    {
        idmenu: 19, idkategori: 27, menu: "Sate Kambing", gambar: "Sate kambing.jpg", harga: 9000
    },
    {
        idmenu: 20, idkategori: 28, menu: "Es Jeruk", gambar: "es jeruk.jpg", harga: 6000
    },
    {
        idmenu: 21, idkategori: 28, menu: "Es Joger", gambar: "es joger.jpg", harga: 8000
    },
    {
        idmenu: 22, idkategori: 28, menu: "Es Jus", gambar: "es jus.jpg", harga: 8000
    },
]

let tampil = tblmenu.map((kolom) => `

        <div class="produk-konten">
            <div class="image">
                <img src="images/${kolom.gambar}" alt="">
            </div>
            <div class="title">
                <h2>${kolom.menu}</h2>
            </div>
            <div class="harga">
                <h2>Rp. ${kolom.harga}</h2>
            </div>
        </div>
        <div class="btn-beli">
            <button data-idmenu="${kolom.idmenu}">Beli</button>
        </div>
        `
);

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");
// membuat array cart
let cart = [];

for (let i = 0; i < btnbeli.length; i++) {
    btnbeli[i].onclick = function () {
        // console.log(btnbeli[i].dataset["idmenu"]);
        // cart.push(btnbeli[i].dataset["idmenu"]);
        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[i].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }
    // console.log(btnbeli[i]);
}

// console.log(cart);
