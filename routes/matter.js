'use strict'
const express = require('express')
const router = express.Router()
const matterCrt = require('../controllers/matter')

router.route('/')
    .post(matterCrt.postMatter)

module.exports = router