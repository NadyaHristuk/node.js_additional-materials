const request = require('request');
const url = ['https://goit.com/api/v1/courses/streams/1', 'https://goit.com/api/v1/courses/streams/2', 'https://goit.com/api/v1/courses/streams/3']

function getNameCourse(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) 
        reject(err);
      resolve(JSON.parse(body).special.course_alias);
    })
  })
}

const main = async() => {
  for (let i = 0; i < url.length; i++) {
    try {
      let result = await getNameCourse(url[i]);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}

main();