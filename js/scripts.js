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


    $("#work4").hover(function() {
        // $("#work4").fadeOut();
        // $("#work4").fadeIn();
        $(".work4").toggle(slow);
    });

    $("form").submit(function(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        alert("Thank you for reaching out to us " + name + "!" + " We have received your message.");
        document.getElementById("contactForm").reset();
    });
});