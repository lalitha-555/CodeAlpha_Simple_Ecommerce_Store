const productContainer = document.getElementById("product-list");

// Fetch products from backend API
fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        // Check if products are available
        if (data.success && data.products.length > 0) {

            data.products.forEach(product => {

                const productCard = document.createElement("div");

                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    
                    <img src="images/${product.image}" 
                         alt="${product.name}" 
                         width="200">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <p>
                        <strong>Price:</strong> ₹${product.price}
                    </p>

                    <button onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>

                `;

                productContainer.appendChild(productCard);

            });

        } else {

            productContainer.innerHTML = 
            "<h3>No products available</h3>";

        }

    })

    .catch(error => {

        console.error("Error fetching products:", error);

        productContainer.innerHTML =
        "<h3>Failed to load products. Start backend server.</h3>";

    });


// Add product to cart
function addToCart(productId) {

    alert("Product added to cart. Product ID: " + productId);

}