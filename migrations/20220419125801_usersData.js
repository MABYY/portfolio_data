exports.up = function(knex) {
  return knex.schema.createTable('usersData', tbl => {
      tbl.string('userId').unique()
      tbl.string('email').unique().notNullable()
      tbl.string('username').notNullable()
      tbl.string('password').notNullable()
      tbl.string('role').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('usersData')
};
