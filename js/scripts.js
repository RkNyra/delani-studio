$(document).ready(function() {
    $("#design, .design").click(function() {
        $("#design").toggle();
        $(".design").toggle();
        document.querySelector("h4").style.fontWeight = "700";
    });

    $("#development, .development").click(function() {
        $("#development").toggle();
        $(".development").toggle();
        document.querySelector("h4").style.fontWeight = "700";
    });

    $("#management, .management").click(function() {
        $("#management").toggle();
        $(".management").toggle();
        document.getElementsByTagName("h4").style.fontWeight = "700";
    });
});