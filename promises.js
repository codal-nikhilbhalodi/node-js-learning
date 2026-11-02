// const fs = require('fs').promises;
// const promise1 = Promise.resolve('First result');
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));
// const promise3 = fs.readFile('example.txt', 'utf8'); // Read local file instead of fetch

// Promise.all([promise1, promise2, promise3])
//   .then(results => {
//     console.log('Results:', results);
//     // results[0] is from promise1
//     // results[1] is from promise2
//     // results[2] is the content of example.txt
//   })
//   .catch(error => {
//     console.error('Error in one of the promises:', error);
//   });

const promise1 = new Promise(resolve => setTimeout(() => resolve('First result'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second result'), 500));

Promise.race([promise1, promise2])
  .then(result => {
    console.log('Fastest result:', result);
    // Will log 'Second result' because promise2 is faster
  });