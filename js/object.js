let objek = {
    nama: "ahmadin",
    kelas: 11,
    coba: () => 5 + 1,
    
};

for (let prop in objek) {
    console.log(objek[prop]);
}

console.log(objek.coba());