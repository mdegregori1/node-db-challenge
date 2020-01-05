
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, task_description: 'task description 1', task_notes: 'task notes 1', completed: 1, project_id: 1},
        {id: 2, task_description: 'task description 2', task_notes: 'task notes 2', completed: 0, project_id: 2},
        {id: 3, task_description: 'task description 3', task_notes: 'task notes 3', completed: 0, project_id: 3}
      ]);
    });
};
