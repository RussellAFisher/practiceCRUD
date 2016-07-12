exports.seed = function(knex, Promise) {
    return knex.raw('TRUNCATE cohort, student RESTART IDENTITY;');
};
