#!/usr/bin/node
const request = require('request');

let url = process.argv[2];
if (!url.endsWith('/')) {
  url += '/';
}

request.get(url, (err, response, body) => {
  if (!err) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const film of films) {
      for (const character of film.characters) {
        if (character.endsWith('/people/18/')) {
          count += 1;
        }
      }
    }
    console.log(count);
  }
});
