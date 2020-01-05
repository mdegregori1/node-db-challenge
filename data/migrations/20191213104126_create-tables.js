
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments()
      tbl.string('project_name', 128).notNullable()
      tbl.string('project_description')
      tbl.boolean('completed').notNullable().defaultTo(0)
  })
  .createTable('resource', tbl => {
      tbl.increments()
      tbl.string('resource_name', 128).notNullable().unique()
      tbl.string('resource_description', 500)
  })
  .createTable('task', tbl => {
      tbl.increments()
      tbl.string('task_description', 500).notNullable()
      tbl.string('task_notes', 128)
      tbl.boolean('completed').notNullable().defaultTo(0)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
  })
  .createTable('project_resource', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resource')
      tbl.primary(['project_id', 'resource_id'])
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('task')
    .dropTableIfExists('resource')
    .dropTableIfExists('project');
  
};
