const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/', controller.postTrip)
router.get('/', controller.getTrips)
router.get('/:id', controller.getTrip)
router.delete('/:', controller.deleteTrip)
module.exports = router
