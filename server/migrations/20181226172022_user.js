
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
      t.increments().primary();   // Auto increment column, type serial
      t.string('username', 255).notNullable();
      t.unique('username');
      t.string('password', 60);
      t.dateTime('createdAt').defaultTo(knex.fn.now());
      t.dateTime('updatedAt');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
