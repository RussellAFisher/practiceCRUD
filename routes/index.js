var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
    knex('student').join('cohort', 'cohort.id', 'student.cohort_id').select('Cohort_Name', 'student.first_name', 'student.last_name', 'cohort.id as cohortID', 'student.id as studentID').then(function(students) {
        res.render('index', {
            students: students,
        });
    });
});

router.get('/addStudent', function(req, res, next) {
    res.render('addStudent');
});

router.post('/addStudent', function(req, res, next) {
    knex('student').insert(req.body).then(function() {
        res.redirect('/');
    }).catch(function(error) {
        next(error);
    });
});

router.get('/studentDelete/:id', function(req, res, next) {
    knex('student').where({
        id: req.params.id
    }).del().then(function() {
        res.redirect('/');
    });
});

router.get('/updateStudent/:id', function(req, res, next) {
    knex('student').join('cohort', 'cohort.id', 'student.cohort_id').select().where('student.id', req.params.id).then(function(student) {
        res.render('updateStudent', {
            student: student
        });
    });
});

router.post('/updateStudent/:id', function(req, res, next) {
    knex('student').update(req.body).where('student.id', req.params.id).then(function(student) {
        res.redirect('/');
    });
});

module.exports = router;
