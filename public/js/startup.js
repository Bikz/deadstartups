document.addEventListener('DOMContentLoaded', () => {
    const startup = JSON.parse(localStorage.getItem('selectedStartup'));
    document.getElementById('startup-name').textContent = startup.name;
    document.getElementById('startup-description').textContent = startup.description;
    document.getElementById('startup-contact').textContent = `Contact: ${startup.contact}`;
});