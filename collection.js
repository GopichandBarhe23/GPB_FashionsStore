let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} has been added to your cart!`);
    window.location.href = "index.html";
    // Log cart items (for demonstration purposes)
    console.log(cart);
}

// Ensure that all focusable elements are focusable via keyboard
document.querySelectorAll('button, a').forEach((el) => {
    el.setAttribute('tabindex', '0'); // Ensure focusable by keyboard
});



//ladies cllection

// Initialize an empty cart array
