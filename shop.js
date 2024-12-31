// Function to add item to cart
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Get the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex > -1) {
        // If product is already in the cart, increase quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If product is not in the cart, add it with quantity 1
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optional: Display a message or update the cart icon
    alert('Product added to the cart!');
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});
