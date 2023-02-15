let selectElement1 = document.getElementById("glazingOptions");
let selectElement2 = document.getElementById("sizeOptions");
var priceChange = parseFloat(selectElement1.value);
var size = parseInt(selectElement2.value);
var base = 2.49;

function glazingChange(element) {
    priceChange = parseFloat(element.value);
}

function sizeChange(element) {
    size = parseInt(element.value);
}

function updatePrice() {
    var price = document.getElementById("price");
    let priceVal = (base + priceChange) * size;
    price.innerHTML = "<b>" + "$ " + priceVal.toFixed(2).toString() + "</b>";
}

selectElement1.addEventListener('change', updatePrice);
selectElement2.addEventListener('change', updatePrice);