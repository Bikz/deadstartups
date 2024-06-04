const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/startups', (req, res) => {
    const startups = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
    res.json(startups);
});

app.post('/api/startups', (req, res) => {
    const startups = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
    startups.push(req.body);
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(startups));
    res.json({ message: 'Startup added successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});