document.querySelectorAll('.section-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.classList.toggle('open'); // Toggle the 'open' class on the content
    });
  });
  