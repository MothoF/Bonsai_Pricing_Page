const checkbox = document.getElementById("check");
const promo = document.getElementById("promo_text");

checkbox.addEventListener("click", (event) => {
    if (event.target.checked) {
        promo.textContent = "17% off!";
    } else {
        promo.textContent = "2 MONTHS FREE!";
    }
});
