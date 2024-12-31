document.querySelectorAll('.help-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
