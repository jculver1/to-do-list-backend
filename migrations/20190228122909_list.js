
exports.up = function(knex, Promise) {
    return knex.schema.createTable('list', (table)=>{
      table.increments();
      table.string('description').notNullable().defaultTo('');
      table.timestamp('post_date_time').defaultTo(knex.fn.now());
  })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('list')
  };
  