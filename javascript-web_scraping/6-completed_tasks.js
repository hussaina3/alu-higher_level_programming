#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], (err, response, body) => {
  if (!err) {
    const todos = JSON.parse(body);
    const counts = {};
    for (const todo of todos) {
      if (todo.completed) {
        if (counts[todo.userId]) {
          counts[todo.userId] += 1;
        } else {
          counts[todo.userId] = 1;
        }
      }
    }
    console.log(counts);
  }
});
