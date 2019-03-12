const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.getUsers)

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/profile', controller.getProfile)
router.get('/logout', controller.logout)

router.get('/:id', controller.getUserById)
router.delete('/:id', controller.deleteUserById)
router.put('/:id', controller.updateUserById)

module.exports = router
