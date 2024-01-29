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

router.post('/', utils.handleErrors((req, res, next) => {
    contactsController.createContact(req, res, next)
}));

router.put('/', utils.handleErrors((req, res, next) => {
    console.log("In router.put");
    console.log("req.query.id: ", req.query.id);
    if (!req.query.id) {
        throw new Error('id is required')
    }
    else{
        contactsController.updateContact(req, res, next)
    }

}));

router.delete('/', utils.handleErrors((req, res, next) => {
    if (!req.query.id) {
        throw new Error('id is required')
    }
    else {
        contactsController.deleteContact(req, res, next)
    };
}));

module.exports = router;