const contactRoutes = require('./contactsRoute');
const express = require('express');
const router = new express.Router();


router.get('/', (req, res, next) => {res.send('<h1>Daniel Christensen</h1>')});
router.use('/contacts', contactRoutes);

module.exports = router;