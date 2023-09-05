document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#tabs button');
    const tabContents = document.querySelectorAll('.tab-content');

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
});

