// Initialize cart from localStorage if available
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price) {
    cart.push({ product, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage
    alert(`${product} has been added to your cart!`);
    updateCartDisplay();  // Optionally update cart display without redirection
    // Log cart items (for demonstration purposes)
    console.log(cart);
}

// Display cart items count in cart icon (or elsewhere)
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length; // Show the number of items in cart
    }
}

// Ensure that all focusable elements are focusable via keyboard
document.querySelectorAll('button, a').forEach((el) => {
    el.setAttribute('tabindex', '0'); // Ensure focusable by keyboard
});

// Call this function when the page loads to update the cart count
window.onload = updateCartDisplay;
