$(document).ready(function() {
    $("#design, .design").click(function() {
        $("#design").toggle();
        $(".design").toggle();
        document.querySelector("h4").style.fontWeight = "700";
    });

    $("#development, .development").click(function() {
        $("#development").toggle();
        $(".development").toggle();
        document.querySelectorAll("h4").style.fontWeight = "700";
    });

    $("#management, .management").click(function() {
        $("#management").toggle();
        $(".management").toggle();
        document.getElementsByTagName("h4").style.fontWeight = "700";
    });


    $(".work4").hover(function() {
        $(".work4caption").toggle("7000ms");
    });

    $(".work3").hover(function() {
        $(".work3caption").toggle("7000ms");
    });

    $(".work2").hover(function() {
        $(".work2caption").toggle("7000ms");
    });

    $(".work1").hover(function() {
        $(".work1caption").toggle("7000ms");
    });
    $(".work5").hover(function() {
        $(".work5caption").toggle("7000ms");
    });
    $(".work6").hover(function() {
        $(".work6caption").toggle("7000ms");
    });
    $(".work7").hover(function() {
        $(".work7caption").toggle("7000ms");
    });

    $(".work8").hover(function() {
        $(".work8caption").toggle("7000ms");
    });

    $("form").submit(function(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        alert("Thank you for reaching out to us " + name + "!" + " We have received your message.");
        document.getElementById("contactForm").reset();
    });
});