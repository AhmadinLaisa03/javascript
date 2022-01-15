let number = 0;

naik.onclick = function () {
    number++;
    document.querySelector("h1").innerHTML = number;
}

turun.onclick = function () {
    // agar ketika angka menunjukkan nilai 0 tidak dapat di kurangi lagi
    // if (number === 0) {
    //     return;
    // } else {
    //     number--;
    //     document.querySelector("h1").innerHTML = number;
    // }

    if (number > 0) {
        number--;
        document.querySelector("h1").innerHTML = number;
    }
}
