document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#tabs button');
    const tabContents = document.querySelectorAll('.tab-content');
    const cards = document.querySelectorAll('.experience-card');
    const details = document.querySelectorAll('.experience-detail');
    const closeButtons = document.querySelectorAll('.close-detail');
    const backdrop = document.querySelector('.backdrop');  // Assuming you added a backdrop div

    // Handle tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // ... (rest remains unchanged)
        });
    });

    // Show the detail when a card is clicked
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Hide all other details
            details.forEach(detail => detail.style.display = 'none');

            // Show the detail for the clicked card
            const detailId = card.getAttribute('data-detail');
            document.getElementById(detailId).style.display = 'block';

            // Show the backdrop
            backdrop.style.display = 'block';

            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';
        });
    });

    // Hide the detail when its close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const detail = button.closest('.experience-detail');
            detail.style.display = 'none';

            // Hide the backdrop
            backdrop.style.display = 'none';

            // Restore scrolling on the body
            document.body.style.overflow = 'auto';
        });
    });
});
