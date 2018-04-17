'use strict'
const express = require('express')
const router = express.Router()
const matterCrt = require('../controllers/matter')

router.route('/')
    .get(matterCrt.getMatters)
    .post(matterCrt.postMatter)
router.route('/:idu')
    .get(matterCrt.getMatter)
    .put(matterCrt.putMatter)


module.exports = router