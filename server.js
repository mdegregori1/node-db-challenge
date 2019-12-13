const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h2>Sprint Challenge Sanity Check</h2>`);
  });


server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;