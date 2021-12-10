const fs = require('fs');

const readStream = (stream) => {
  let resolve,
    reject;

  stream.on('data', data => resolve(data));
  stream.on('error', err => reject(err));
  stream.on('end', () => resolve());

  return function () {
    return new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    })
  }
}

async function read() {
  let stream = fs.createReadStream('01-example.js', {
    highWaterMark: 80,
    encoding: 'utf8'
  });
  let reader = readStream(stream);
  let data = await reader();
  while (data) {
    // await new Promise((resolve, reject) => setTimeout(resolve, 500));
    console.log(data);
    data = await reader();
  }
}

read()