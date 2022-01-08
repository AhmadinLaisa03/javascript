function tampil() {
    a = document.querySelector(".isi");
    a.innerText = "Event handler dengan mengklik atribut html";
}


// klik adalah id di dalam index.html
klik.onclick = function () {
    document.querySelector(".result").innerHTML = "Event handler dengan mengklik atribut html yang disertai ID";
}

function Tampil(msg) {
    cetak = document.querySelector(".print").innerText = "cetak "+msg;
}