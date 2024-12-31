localStorage.setItem('username', 'Gopichand');
const username = localStorage.getItem('Gopichand');
console.log(Gopichand); // Outputs: Gopichand







/*cart page*/
// Update the quantity and total price of a specific item
function updateQuantity(itemId, change) {
  const quantityInput = document.getElementById(itemId);
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity += change;
  if (currentQuantity < 1) currentQuantity = 1; // Prevent negative quantity
  quantityInput.value = currentQuantity;

  // Update the price
  updatePrice(itemId, currentQuantity);

  // Update total items and price
  updateCartSummary();
}

// Update the price for a specific item
function updatePrice(itemId, quantity) {
  const priceElement = document.getElementById(`price-${itemId}`);
  const unitPrice = itemId === 'item1' ? 49.99 : 39.99; // Hardcoded price, could be dynamic
  const newPrice = unitPrice * quantity;
  priceElement.innerText = `$${newPrice.toFixed(2)}`;
}

// Update the cart summary (total items and price)
function updateCartSummary() {
  const item1Quantity = parseInt(document.getElementById('item1').value);
  const item2Quantity = parseInt(document.getElementById('item2').value);

  const totalItems = item1Quantity + item2Quantity;
  document.getElementById('total-items').innerText = totalItems;

  const item1Price = item1Quantity * 49.99;
  const item2Price = item2Quantity * 39.99;
  const totalPrice = item1Price + item2Price;

  document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
}





/*  contact page */
// Function to handle form submission
function submitForm() {
    // Get form elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var responseMessage = document.getElementById('response-message');
    
    // Validate that fields are not empty
    if (name === "" || email === "" || message === "") {
        responseMessage.style.color = "#e74c3c";
        responseMessage.textContent = "All fields are required!";
        return;
    }
    
    // Simulate successful form submission
    setTimeout(function() {
        responseMessage.style.color = "#27ae60";
        responseMessage.textContent = "Thank you for contacting us, " + name + ". We'll get back to you soon!";
        // Reset form fields
        document.getElementById('contact-form').reset();
    }, 1000);
}

/*privacy policy*/
document.querySelectorAll('.section-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.style.display === 'block';
      
      // Toggle display of the section content
      content.style.display = isOpen ? 'none' : 'block';
    });
  });
  

  /*testimonial*/
  document.querySelectorAll('.section-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.style.display === 'block';
      
      // Toggle display of the section content
      content.style.display = isOpen ? 'none' : 'block';
    });
  });
  
  // Handle Testimonial Form Submission
  document.getElementById('testimonial-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const testimonialText = document.getElementById('testimonial').value;
  
    if (name && testimonialText) {
      // You can add the testimonial to the page dynamically
      const testimonialContainer = document.createElement('div');
      testimonialContainer.classList.add('testimonial');
      
      testimonialContainer.innerHTML = `
        <blockquote>
          <p>"${testimonialText}"</p>
        </blockquote>
        <footer>
          <p>- ${name}</p>
        </footer>
      `;
  
      document.getElementById('testimonials').appendChild(testimonialContainer);
      document.getElementById('testimonial-form').reset(); // Reset the form
    } else {
      alert('Please fill out all fields.');
    }
  });
  
/* offer page */
function countdown() {
    const targetDate = new Date('2024-12-31T23:59:59'); // Set your end date
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('timer').innerHTML = 'Offer Ended';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(countdown, 1000);


/*help centre*/
// Function to toggle the visibility of the help answers
function toggleAnswer(id) {
  const answer = document.getElementById(id);
  // Toggle the visibility of the answer
  if (answer.style.display === 'block') {
      answer.style.display = 'none';
  } else {
      answer.style.display = 'block';
  }
}


//cart
// Function to update the quantity and price
function updateQuantity(itemId, change) {
  var quantityInput = document.getElementById(itemId);
  var priceElement = document.getElementById('price-' + itemId);
  
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + change;
  
  if (newQuantity < 1) return; // Prevent decreasing below 1
  
  quantityInput.value = newQuantity;

  var price = 0;
  
  if (itemId === 'item1') {
      price = 499; // Price of item1
  } else if (itemId === 'item2') {
      price = 679; // Price of item2
  }

  var totalPrice = newQuantity * price;
  priceElement.textContent = '₹' + totalPrice;
  updateCartSummary();
}

// Function to update the cart summary
function updateCartSummary() {
  var item1Quantity = parseInt(document.getElementById('item1').value);
  var item2Quantity = parseInt(document.getElementById('item2').value);

  var item1Price = 499;
  var item2Price = 679;

  var totalItems = item1Quantity + item2Quantity;
  var totalPrice = (item1Quantity * item1Price) + (item2Quantity * item2Price);

  document.getElementById('total-items').textContent = totalItems;
  document.getElementById('total-price').textContent = '₹' + totalPrice;
}

//payment
// Handle form submission and show confirmation popup
document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to the server

  // Show the confirmation pop-up
  document.getElementById('confirmation-popup').style.display = 'flex';
});

// Function to redirect to the home page when "OK" is clicked on the pop-up
function goToHome() {
  window.location.href = 'index.html'; // Change this URL to your homepage if needed
}


