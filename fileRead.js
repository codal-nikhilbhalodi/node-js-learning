const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
// console.log('Reading file... (this runs first!)');

// // Blocking code example
// console.log('Start of blocking code');
// const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
// console.log('Blocking operation completed');

// Non-blocking code example
// console.log('Start of non-blocking code');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('Non-blocking operation completed');
// });
// console.log('This runs before the file is read');

try {
    console.log('Start of non-blocking code');

    fs.readFile('myfile.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('Non-blocking operation completed');
    });
    console.log('This runs before the file is read');

} catch (err) {
    console.log('Error raised from catch');
    console.error(err);
}
