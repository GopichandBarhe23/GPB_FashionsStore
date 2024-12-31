function countdown() {
    const targetDate = new Date('2024-12-31T23:59:59'); // Set your end date
    const now = new Date();
    const timeRemaining = targetDate - now;

    // Get the timer element
    const timerElement = document.getElementById('timer');

    // If the element doesn't exist, return
    if (!timerElement) {
        return;
    }

    if (timeRemaining <= 0) {
        timerElement.innerHTML = 'Offer Ended';
        clearInterval(intervalId); // Stop the countdown once it ends
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Set the interval and store the reference for later clearing
const intervalId = setInterval(countdown, 1000);
