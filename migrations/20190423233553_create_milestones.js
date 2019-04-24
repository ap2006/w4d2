
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('milestones', function (table) {
      table.increments('id')
      table.string('description', 255).notNullable()
      table.date('date_achieved').notNullable()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('milestones')
}
