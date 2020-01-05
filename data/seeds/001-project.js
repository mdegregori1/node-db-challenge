
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, project_name: 'Sprint Challenge', project_description: 'random text 1', completed: 1},
        {id: 2, project_name: 'Sprint Challenge2', project_description: 'random text 2', completed: 0},
        {id: 3, project_name: 'Sprint Challenge3', project_description: 'random text 3', completed: 0}
      ]);
    });
};
