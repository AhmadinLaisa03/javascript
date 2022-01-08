function coba() {
    alert('coba');
}

function coba2() {
    // a = document.querySelector(".isi");
    // a.innerHTML = "Belajar addeventlistener";
    alert("thanks");
}
function coba3() {
    // a = document.querySelector(".isi");
    // a.innerHTML = "Belajar addeventlistener";
    alert("thanks again");
}
// judul.addEventListener("click", coba);

judul.onclick = coba;
judul.addEventListener("click", coba2);
judul.addEventListener("click", coba3);