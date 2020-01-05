const db = require('../data/db-config.js');

module.exports = {
    findProject,
    findResources,
    findTasks,
    addProject,
    addResource,
    addTask
}

function findProject() {
    return db('project');
}

function findResources(){
    return db('resource')
}

function findTasks(id){
    return db('task as t')
    .where({project_id: id})
    .join('project as p', 'p.id', 't.project_id')
    .select('t.task_description', 't.task_notes', 't.completed', 'p.project_description', 'p.project_name')
}

function addProject(project){
    return db('project')
    .insert(project)
    .then( ids => {
        return findProject(ids[0])
    })
}

function addResource(resource){
    return db('resource')
    .insert(resource)
    .then( ids => {
        return findResources(ids[0])
    })
}

function addTask(task, project_id){
    return db('task')
    .insert(task,project_id)
    .then(ids => {
        return findTasks(ids[0])
    })
}
