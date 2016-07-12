exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohort', function(table) {
        table.increments();
        table.text('Cohort_Name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('cohort');
};
