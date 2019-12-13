const express = require('express');

// const RecipeRouter = require('./recipes/recipe-router');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge Sanity Check</h2>`);
  });


server.use(express.json());
// server.use('/api/recipes', RecipeRouter);

module.exports = server;