// API URL (eksempel med JSON-placeholder data)
const apiUrl = "/api/nb/foods.json"


// Henter menydata fra API
async function fetchMenu() {
    const menuContainer = document.getElementById("menu-container");
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Klarte ikke å laste menyen.");
        const menuData = await response.json();

        // Tøm innholdet og vis menyen
        menuContainer.innerHTML = "";
        menuData.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";
            menuItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>Pris: ${item.price} NOK</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    } catch (error) {
        menuContainer.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

// Last menyen ved siden start
document.addEventListener("DOMContentLoaded", fetchMenu);
