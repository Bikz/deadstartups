document.getElementById('new-startup-form').onsubmit = function (e) {
    e.preventDefault();
    const newStartup = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        contact: document.getElementById('contact').value
    };
    fetch('/api/startups', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStartup)
    }).then(response => response.json()).then(data => {
        window.location.href = 'index.html';
    });
};