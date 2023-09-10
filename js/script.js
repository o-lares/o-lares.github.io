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
        // Remove the active class from all tabs
        tabs.forEach(innerTab => innerTab.classList.remove('active'));

        // Add the active class to the clicked tab
        tab.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');
        
        // Show the clicked tab's content
        const targetContent = document.querySelector(tab.getAttribute('data-tab-target'));
        targetContent.style.display = 'block';
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

const zoomables = document.querySelectorAll('.zoomable');
const zoomOverlay = document.querySelector('.zoom-overlay');
const zoomOverlayImg = zoomOverlay.querySelector('img');

zoomables.forEach(zoomable => {
    zoomable.addEventListener('click', function() {
        zoomOverlayImg.src = zoomable.src;
        zoomOverlay.style.display = 'flex';
    });
});

zoomOverlay.addEventListener('click', function() {
    zoomOverlay.style.display = 'none';
});

// Hide the detail when the backdrop is clicked
backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) {
        details.forEach(detail => detail.style.display = 'none');
        
        // Hide the backdrop
        backdrop.style.display = 'none';

        // Restore scrolling on the body
        document.body.style.overflow = 'auto';
    }
});