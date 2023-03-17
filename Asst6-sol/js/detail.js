const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
var basePrice = rolls[rollType]["basePrice"];
var imageFile = rolls[rollType]["imageFile"];
document.getElementById("productImage").src = "img/" + imageFile;
document.getElementById("price").innerHTML = "<b>" + "$ " + basePrice.toString() + "</b>";
document.getElementById("heading").innerHTML = rollType + " Cinnamon Roll";

function addToCart(){
    let rollGlazingElt = document.getElementById("glazingOptions");
    let rollGlazing = rollGlazingElt.options[rollGlazingElt.selectedIndex].text
    let packSizeElt = document.getElementById("sizeOptions");
    let packSize = packSizeElt.options[packSizeElt.selectedIndex].text
    let thisRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart = JSON.parse(localStorage.getItem("Cart"));
    if (!cart) {
        cart = [];
    }
    cart.push(thisRoll);
    localStorage.setItem("Cart", JSON.stringify(cart));
    console.log(cart);
}



