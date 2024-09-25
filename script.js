// Get all modal links
const modalLinks = document.querySelectorAll('.modal-link');

// Get all modals and close buttons
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open modal when clicking on link
modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

// Close modal when clicking on the close button
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-close');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
