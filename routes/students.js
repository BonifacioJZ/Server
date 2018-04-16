'use strict'
const express = require('express')
const router = express.Router()
const studentCtr= require('../controllers/students')


router.route('/')
    .get(studentCtr.getStudents)
    .post(studentCtr.postStudent)
router.route('/:idu')
    .post(studentCtr.getMatterS)
    .put(studentCtr.putStudent)
    .delete(studentCtr.deleteStudent)
    .get(studentCtr.getStudent)
router.route('/matter/:idu')
    .put(studentCtr.studentMatter)
    .delete(studentCtr.delteMatter)
    .post(studentCtr.addQualification)
    

module.exports = router