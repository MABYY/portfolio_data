exports.up = function(knex) {
    return knex.schema.createTable('fundData', tbl => {
        tbl.string('fundId').unique()
        tbl.integer('Api').notNullable()
        tbl.string('Nombre_Fondo').notNullable()
        tbl.string('Fecha').notNullable()
        tbl.string('date').notNullable()
        
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fundData')
  };
  
