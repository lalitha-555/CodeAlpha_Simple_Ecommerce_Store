const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalPrice = 0;

// If cart is empty
if (cart.length === 0) {

    cartItems.innerHTML = "<h2>Your Cart is Empty!</h2>";

    total.innerHTML = "Total: ₹0.00";

} else {

    cart.forEach((product, index) => {

        totalPrice += Number(product.price);

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <h2>₹${product.price}</h2>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(card);

    });

    total.innerHTML = "Total: ₹" + totalPrice.toFixed(2);
}

// Remove product
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}

// Checkout
function checkout() {

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.reload();

}