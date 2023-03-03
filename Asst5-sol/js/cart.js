const priceGuide = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10,
    "Keep Original": 0.00,
    "Sugar Milk": 0.00,
    "Vanilla Milk": 0.50,
    "Double-chocolate": 1.50
}

var cart = [];

let original = new Roll("Original", "Sugar Milk", "1", "2.49");
let walnut = new Roll("Walnut", "Vanilla Milk", "12", "3.49");
let raisin = new Roll("Raisin", "Sugar Milk", "3", "2.99");
let apple = new Roll("Apple", "Keep Original", "3", "3.49");

cart.push(original);
cart.push(walnut);
cart.push(raisin);
cart.push(apple);

function calculatePrice(roll) {
    let priceChange = parseFloat(priceGuide[roll.glazing]);
    let size = parseInt(priceGuide[roll.size]);
    let base = parseFloat(roll.basePrice);
    let priceVal = (base + priceChange) * size;
    return priceVal.toFixed(2);
}

var totalPrice = 0;
function displayOne(item) {
    // create product div
    let prod_cart = document.getElementById("prod-cart");
    let prod = document.createElement('div');
    prod.className = "product-cart";
    // product img
    let img_con = document.createElement('div');
    img_con.className = "cart-ele";
    let img = document.createElement('img');
    let imgFile = rolls[item.type]["imageFile"];
    img.src = "img/" + imgFile;
    img.className = "item-cart";
    img_con.appendChild(img);
    // product attributes
    let text_con = document.createElement('div');
    text_con.className = "cart-ele text";
    let text1 = document.createElement('p');
    text1.className = "cart-text";
    text1.innerHTML = item.type + " Cinnamon Roll";
    text_con.appendChild(text1);
    let text2 = document.createElement('p');
    text2.className = "cart-text";
    text2.innerHTML = "Glazing: " + item.glazing;
    text_con.appendChild(text2);
    let text3 = document.createElement('p');
    text3.className = "cart-text";
    text3.innerHTML = "Pack Size: " + item.size;
    text_con.appendChild(text3);
    // product price
    let price_con = document.createElement('div');
    price_con.className = "cart-ele cart-price";
    let price_txt = document.createElement('p');
    price_txt.className = "header";
    let price = calculatePrice(item);
    totalPrice += parseFloat(price);
    price_txt.innerHTML = "$" + price;
    price_con.appendChild(price_txt);
    // put together
    prod.appendChild(img_con);
    prod.appendChild(text_con);
    prod.appendChild(price_con);
    // remove button
    let removeButton = document.createElement('p');
    removeButton.className = "remove";
    removeButton.innerHTML = "Remove";
    removeButton.addEventListener('click', function() {removeFromCart(item)});
    // put into cart
    prod_cart.appendChild(prod);
    prod_cart.appendChild(removeButton);
}

function displayProducts() {
    // clear previous display
    console.log(cart);
    let prod_cart = document.getElementById("prod-cart");
    prod_cart.replaceChildren();
    totalPrice = 0;
    for (let i = 0; i < cart.length; i ++) {
        displayOne(cart[i]);
    }
    let totalPriceElt = document.getElementById("totalPrice");
    totalPriceElt.innerHTML = "$ " + totalPrice.toFixed(2);
}

function removeFromCart(item) {
    cart = cart.filter(e => e !== item);
    displayProducts();
}

