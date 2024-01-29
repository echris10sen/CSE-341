/****************************************************************************************
 * Name: contactsController.js
 * Description: Controller for the Contacts API
 * Table of Contents:
 *  Imports:
 *    -contactsModel: The contactsModel object
 *  Variables:
 *   -contactsController: The contactsController object
 *  Methods:
 *   -contactsController.contactsList: Get the list of contacts
 *   -contactsController.getContact: Get a contact by ID
 *   -contactsController.createContact: Create a contact
 *   -contactsController.updateContact: Update a contact
 *   -contactsController.deleteContact: Delete a contact
 *  Exports
 *   -contactsController: The contactsController object
 * ***************************************************************************************/
/***********************
 * Imports:
 * ***********************/
const contactsModel = require("../models/contactsModel");

/***********************
 * Variables:
 * ***********************/
const contactsController = {}

/***********************
 * Methods:
 * ***********************/
/***********************
 * Name: contactsController.contactsList
 * Description: Get the list of contacts and sends a response with an array of contact objects
 * Parameters: req, res
 * Returns: None
 * Notes: None
 * Issues: None
 * *********************/
contactsController.contactsList = async function (req, res) {
  const contactList = await contactsModel.getContactList();
  // contactList.forEach((result, i) => {
  //   console.log(`${i + 1}. ${result.firstName}`);
  // });
  res.send(contactList);
};

/***********************
 * Name: contactsController.getContact
 * Description: Get a contact by ID and sends a response with a contact object
 * Parameters: req, res
 * Returns: None
 * Notes: None
 * Issues: None
 * *********************/
contactsController.getContact = async function (req, res) {
  console.log("In getContact in contactsController.js");
  const contact = await contactsModel.getContact(req.query.id);
  res.send(contact);
}

/***********************
 * Name: contactsController.createContact
 * Description: Create a contact and sends a response with a contact object
 * Parameters: req, res
 * Returns: None
 * Notes: None
 * Issues: None
 * *********************/
contactsController.createContact = async function (req, res) {
  console.log("In createContact in contactsController.js");
  data = req.body;
  const contact = await contactsModel.createContact(data);
  res.send(contact);
};

/***********************
 * Name: contactsController.updateContact
 * Description: Update a contact and sends a response with a contact object
 * Parameters: req, res
 * Returns: None
 * Notes: None
 * Issues: None
 * *********************/
contactsController.updateContact = async function (req, res) {
  console.log("In updateContact in contactsController.js");
  console.log("req.query.id: ", req.query.id);
  const contact = await contactsModel.updateContact(req.query.id, req.body);
  res.send(contact);
};

/***********************
 * Name: contactsController.deleteContact
 * Description: Delete a contact and sends a response with a contact object
 * Parameters: req, res
 * Returns: None
 * Notes: None
 * Issues: None
 * *********************/
contactsController.deleteContact = async function (req, res) {
  console.log("In deleteContact in contactsController.js");
  const contact = await contactsModel.deleteContact(req.query.id);
  res.send(contact);
};

/***********************
 * Exports:
 * contactsController
 * Example: const {contactsController} = require('./contactsController');
 * ***********************/
module.exports = contactsController;