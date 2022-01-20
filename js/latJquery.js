// penulisan JQUERY
$(document).ready(function () {
    $("#isi").html("<h1>Belajar JQuery</h1>");

    // // Shorthand for $( document ).ready()
    // $(function() {
    //     console.log("ready!");
    // });

    // select class
    // $(".kelas").html("<h2>lorem ipsum</h2>");

    // 2. JQUERY EVENTS

    // onclick
    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar JQUERY");
    });

    // mouseleave
    // $("#isi").mouseleave(function () {
    //     alert("belajar JQUERY");
    // });
});