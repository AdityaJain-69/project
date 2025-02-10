document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.querySelector(".search-bar input");
    let locationSelect = document.querySelector(".location select");

    // Log search input
    searchInput.addEventListener("input", function () {
        console.log("User is searching for:", searchInput.value);
    });

    // Log location change
    locationSelect.addEventListener("change", function () {
        console.log("Location changed to:", locationSelect.value);
    });
});
