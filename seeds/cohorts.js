exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cohort').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('cohort').insert({
                    Cohort_Name: 'g25'
                }),
                knex('cohort').insert({
                    Cohort_Name: 'g213'
                })
            ]);
        });
};
