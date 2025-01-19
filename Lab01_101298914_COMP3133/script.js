const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// Paths to the text files
const canadaFile = path.join(__dirname, 'canada.txt');
const usaFile = path.join(__dirname, 'usa.txt');

// Delete files if they already exist
if (fs.existsSync(canadaFile)) {
    fs.unlinkSync(canadaFile);
}

if (fs.existsSync(usaFile)) {
    fs.unlinkSync(usaFile);
}

// Create writable streams for canada.txt and usa.txt
const canadaStream = fs.createWriteStream(canadaFile, { flags: 'a' });
const usaStream = fs.createWriteStream(usaFile, { flags: 'a' });

// Add headers to the files
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

// Read the input CSV and filter data
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.country.toLowerCase() === 'canada') {
            canadaStream.write(`${row.country},${row.year},${row.population}\n`);
        } else if (row.country.toLowerCase() === 'united states') {
            usaStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV file has been processed and data written to canada.txt and usa.txt');
    });
