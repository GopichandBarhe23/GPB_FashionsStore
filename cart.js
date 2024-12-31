// Sample products in the cart
/*
//
let cart = [
    { id: 1, name: "T-Shirt", price: 20.0, quantity: 1 },
    { id: 2, name: "Jeans", price: 40.0, quantity: 2 },
    { id: 3, name: "Sneakers", price: 60.0, quantity: 1 },
];

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    cartItemsContainer.innerHTML = ""; // Clear cart

    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>
                <button class="decrease" aria-label="Decrease quantity" onclick="updateQuantity(${item.id}, -1)">-</button>
                ${item.quantity}
                <button class="increase" aria-label="Increase quantity" onclick="updateQuantity(${item.id}, 1)">+</button>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <button class="remove" aria-label="Remove item" onclick="removeItem(${item.id})">Remove</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
    });

    cartTotalElement.textContent = total.toFixed(2);
}

// Update quantity
function updateQuantity(productId, change) {
    const product = cart.find((item) => item.id === productId);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            removeItem(productId);
        } else {
            renderCart();
        }
    }
}

// Remove item
function removeItem(productId) {
    cart = cart.filter((item) => item.id !== productId);
    renderCart();
}

// Initialize cart rendering
renderCart();

//
*/
// Function to update the cart table
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let totalPrice = 0;

    // Clear the existing cart items
    cartItemsContainer.innerHTML = '';

    // Loop through the cart items and add them to the table
    cart.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.name}</td>
            <td>
                <button class="quantity-decrease" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-increase" data-id="${item.id}">+</button>
            </td>
            <td>₹${item.price}</td>
            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-item" data-id="${item.id}">Remove</button></td>
        `;

        // Add the row to the cart
        cartItemsContainer.appendChild(row);

        // Update the total price
        totalPrice += item.price * item.quantity;
    });

    // Update the total price in the summary
    cartTotalElement.textContent = totalPrice.toFixed(2);
}

// Function to handle removing an item from the cart
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to increase item quantity
function increaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Function to decrease item quantity
function decreaseQuantity(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
}

// Event listeners for cart actions
document.addEventListener('DOMContentLoaded', () => {
    updateCart();

    // Event listener for quantity increase
    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('quantity-increase')) {
            const id = event.target.getAttribute('data-id');
            increaseQuantity(id);
        }
        if (event.target.classList.contains('quantity-decrease')) {
            const id = event.target.getAttribute('data-id');
            decreaseQuantity(id);
        }
        if (event.target.classList.contains('remove-item')) {
            const id = event.target.getAttribute('data-id');
            removeItem(id);
        }
    });
});

