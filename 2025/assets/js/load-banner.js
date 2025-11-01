// Load banner dynamically
(function() {
    // Create a placeholder for the banner
    const bannerPlaceholder = document.getElementById('banner-placeholder');

    if (bannerPlaceholder) {
        // Fetch and insert the banner HTML
        fetch('banner.html')
            .then(response => response.text())
            .then(html => {
                bannerPlaceholder.outerHTML = html;
            })
            .catch(error => {
                console.error('Error loading banner:', error);
            });
    }
})();

