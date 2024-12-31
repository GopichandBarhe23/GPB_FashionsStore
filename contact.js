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

    // Validate email format
    var emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailPattern.test(email)) {
        responseMessage.style.color = "#e74c3c";
        responseMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Simulate sending the form data to the backend (using fetch)
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        // Simulate success response from backend
        responseMessage.style.color = "#27ae60";
        responseMessage.textContent = "Thank you for contacting us, " + name + ". We'll get back to you soon!";
        
        // Reset the form fields
        document.getElementById('contact-form').reset();

        // Clear the response message after 5 seconds
        setTimeout(function() {
            responseMessage.textContent = "";
        }, 5000);
    })
    .catch(error => {
        // Handle error from the backend
        responseMessage.style.color = "#e74c3c";
        responseMessage.textContent = "Something went wrong. Please try again later.";
    });
}
