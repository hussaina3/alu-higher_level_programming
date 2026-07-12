#!/usr/bin/node
const request = require('request');
const fs = require('fs');

request.get(process.argv[2], (err, response, body) => {
  if (!err) {
    fs.writeFile(process.argv[3], body, 'utf8', (writeErr) => {
      if (writeErr) {
        console.log(writeErr);
      }
    });
  }
});
