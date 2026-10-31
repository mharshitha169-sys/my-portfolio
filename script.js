$(document).ready(function () {
    // Toggle the mobile navigation menu
    $("#menuBtn").click(function () {
        $("#navMenu").toggleClass("show");
    });

    // Display a welcome message
    $("#welcomeBtn").click(function () {
        $("#welcomeMessage").text(
            "Hello! Welcome to my portfolio. Thank you for visiting!"
        );
    });
});
