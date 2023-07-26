// Importing the express
const express = require('express');
// Created the router
const router = express.Router();

const doctor = require('../controllers/doctorController')

// Created the router for Doctor register
router.post('/register',doctor.create)

// Created the router for Doctor login
router.post('/login',doctor.createSession)

module.exports = router;