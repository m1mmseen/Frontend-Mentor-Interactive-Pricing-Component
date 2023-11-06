'use strict'
//SLIDER VARIABLES AND FUNCTIONS

const values = ['8', '12', '16', '24', '36']; // Your predefined values
const range = document.getElementById('sliderInput');
const price = document.getElementById('price');
const pageviews = document.getElementById("page-views");

const costPerViewMap = new Map();
costPerViewMap.set('8', '10K');
costPerViewMap.set('12', '50K');
costPerViewMap.set('16', '100K');
costPerViewMap.set('24', '500K');
costPerViewMap.set('36', '1M');

let initialValue = values[range.value];

price.innerHTML = initialValue + ".00";
pageviews.innerHTML =  costPerViewMap.get(initialValue);
updateSliderBackground(range.value);

range.oninput = function() {
    displayPrice();
}
function displayPrice() {
    let value = values[range.value]
    updateSliderBackground(range.value);
    let newPrice = (checked) ? (parseInt(value) * .75).toString() : value;
    price.innerHTML = newPrice + ".00";
    pageviews.innerHTML =  costPerViewMap.get(value);
}

function updateSliderBackground(value) {
    let track = document.querySelector("input[type='range']");
    let percentage = (value / (values.length - 1)) * 100;
    track.style.setProperty("--track-background", 'linear-gradient(to right, var(--soft-cyan) ' + percentage + '%, var(--light-grayish-blue-slider) ' + percentage + '%)');
}

// CHECKBOX VARIABLES AND FUNCTIONS

let checkbox = document.querySelector("input[type='checkbox']");
let checked = checkbox.checked;

checkbox.addEventListener("click", function () {
    checked = checkbox.checked;
/*    let price = range.value * 1.25;
    let newPrice = price.toString();*/
    displayPrice();
})