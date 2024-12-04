// Log-in form functionality
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to server

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate login (basic example)
    if (username === "admin" && password === "1234") {
        window.location.href = "homepage.html"; // Redirect to homepage
    } else {
        alert("Feil brukernavn eller passord.");
    }
});
