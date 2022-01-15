document.querySelector("#klik").addEventListener("click", tampil);

async function tampil() {
    const url = "../JSONplaceholder/users.json";

    const hasil_fetch = await fetch(url);

    const data_json = await hasil_fetch.json();

    // console.log(data_json);

    let output = "<ul>";
    data_json.forEach(element => {
        console.log(element.name);
        output += `<li>${element.name}</li>`;
    });

    output += "</ul>";
    document.querySelector("#isi").innerHTML = output;
}