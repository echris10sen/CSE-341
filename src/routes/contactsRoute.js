const express = require('express');
const router = new express.Router();
const contactsController = require('../controllers/contactsController');
const utils = require('../utils');

router.get('/', utils.handleErrors((req, res, next) => {
    if (req.query.id) {
        contactsController.getContact(req, res, next)
    } else {
        contactsController.contactsList(req, res, next)
    }
}));

module.exports = router;