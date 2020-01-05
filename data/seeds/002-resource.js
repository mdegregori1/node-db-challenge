
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, resource_name: 'resource1', resource_description: 'resource description 1'},
        {id: 2, resource_name: 'resource2', resource_description: 'resource description 2'},
        {id: 3, resource_name: 'resource3', resource_description: 'resource description 3'}
      ]);
    });
};
