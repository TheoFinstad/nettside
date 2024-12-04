// JavaScript functionality for homepage

// Handle the "Lær mer" button click
document.getElementById("learn-more-btn").addEventListener("click", function () {
    alert("Mer info om kantinen kommer snart!");
});

// Search bar functionality (simple example)
document.getElementById("search-bar").addEventListener("input", function (event) {
    const searchValue = event.target.value.toLowerCase();
    const description = document.getElementById("description");

    if (searchValue.includes("c")) {
        description.style.color = "blue";
    } else {
        description.style.color = "gray";
    }
});
