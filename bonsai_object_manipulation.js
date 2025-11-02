const checkbox = document.getElementById("check");
const promo = document.getElementById("promo_text");

const periods = document.getElementsByClassName("period")

const values = document.getElementsByClassName("value");

const per_period = document.getElementsByClassName("per_period");

const add_on_costs = document.getElementsByClassName("bold_text");

checkbox.addEventListener("click", (event) => {
    if (event.target.checked) {
        promo.textContent = "17% off!";

        periods[0].textContent = "/YEAR";
        periods[1].textContent = "/YEAR";
        periods[2].textContent = "/YEAR";

        values[0].textContent = ((24*12) - ((24*12) * 0.17)).toFixed(2);
        values[1].textContent = ((39*12) - ((39*12) * 0.17)).toFixed(2);
        values[2].textContent = ((79*12) - ((79*12) * 0.17)).toFixed(2);

        per_period[0].textContent = "/YEAR";
        per_period[1].textContent = "/YEAR";

        add_on_costs[1].textContent = "$" + ((9*12) - ((9*12) * 0.17)).toFixed(2);
        add_on_costs[2].textContent = "$" + ((10*12) - ((10*12) * 0.17)).toFixed(2);

    } else {
        promo.textContent = "2 MONTHS FREE!";

        periods[0].textContent = "/MONTH";
        periods[1].textContent = "/MONTH";
        periods[2].textContent = "/MONTH";

        values[0].textContent = 24;
        values[1].textContent = 39;
        values[2].textContent = 79;

        per_period[0].textContent = "/MONTH";
        per_period[1].textContent = "/MONTH";

        add_on_costs[1].textContent = "$9";
        add_on_costs[2].textContent = "$10";
        
    }
});
