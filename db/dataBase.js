const fs = require('fs');
const path = require('path');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, 'platos.json'), 'utf-8')),
    getAbout: JSON.parse(fs.readFileSync(path.join(__dirname, 'about.json'), 'utf-8'))
}