document.querySelectorAll('.section-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling; // Get the .section-content element
        content.style.display = content.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
    });
});
