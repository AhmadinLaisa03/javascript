// menambah kan addeventlistener kepada button dengan id klik
document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    // console.log("hello world");

    // membuat variabel yang berisi link url API
    let url = "http://jsonplaceholder.typicode.com/todos";
    fetch(url)
    .then(hasil_fetch => hasil_fetch.json())
    .then(data_json => {
        let out = "<ul>";
        data_json.forEach(API => {
            // out += "<li>";
            // out += `${API.title}`;
            // out += "</li>";
            out += `<li>${API.title}</li>`;
        })
        out += "</ul>";
        document.querySelector("#isi").innerHTML = out;
    })
}