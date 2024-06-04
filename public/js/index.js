document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/startups')
        .then(response => response.json())
        .then(data => {
            const listingsContainer = document.getElementById('listings');
            data.forEach(startup => {
                const listing = document.createElement('div');
                listing.className = 'listing';
                listing.innerHTML = `<h2>${startup.name}</h2><p>${startup.description}</p>`;
                listing.onclick = () => {
                    localStorage.setItem('selectedStartup', JSON.stringify(startup));
                    window.location.href = 'startup.html';
                };
                listingsContainer.appendChild(listing);
            });
        });
});