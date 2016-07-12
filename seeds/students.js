exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('student').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('student').insert({
                    first_name: 'Russell',
                    last_name: 'Fisher',
                    cohort_id: 2
                }),
                knex('student').insert({
                    first_name: 'Mairin',
                    last_name: 'Bailey',
                    cohort_id: 1
                }),
                knex('student').insert({
                    first_name: 'Andrew',
                    last_name: 'Vandermeer',
                    cohort_id: 2
                }),
                knex('student').insert({
                    first_name: 'Peter',
                    last_name: 'Ostiguy',
                    cohort_id: 1
                }),
                knex('student').insert({
                    first_name: 'Steven',
                    last_name: 'Lawson',
                    cohort_id: 2
                }),
            ]);
        });
};
