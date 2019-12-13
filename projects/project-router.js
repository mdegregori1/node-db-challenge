const express = require('express');

const Projects= require('./project-models.js');

const router = express.Router();

router.get('/projects', (req, res) => {
    Projects.findProject()
    .then(projects => {
        projects.map(project => {
            project.completed = project.completed ? true: false
        })
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });



router.get('/:id/tasks', (req, res) => {
    const id = req.params.id;
    Projects.findTasks(id)
    .then(id => {
        id.map(task => {
            task.completed = task.completed ? true: false
        })
      if(id.length > 0){
        res.status(200).json(id)
      } else {
        res.status(404).json({message: "please enter a valid id"})
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({error: "error getting the steps by id"})
    })
  })



  router.post('/projects', (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });
  
  router.post('/resources', (req, res) => {
    const Data = req.body;
  
    Projects.addResource(Data)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });
  
  router.post('/tasks', (req, res) => {
    const Data = req.body;
  
    Projects.addTask(Data)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });
  


  


module.exports = router;