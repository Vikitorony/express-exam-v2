exports.up = (knex) => {
  return knex.schema.createTable('flats', (table) => {
    table.increments();
    table.string('title');
    table.integer('price');
    table.integer('floorArea');
    table.string('country');
    table.integer('zip');
    table.string('city');
    table.string('street');
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('flats');
};
