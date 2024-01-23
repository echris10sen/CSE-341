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
 * Exports:
 * contactsController
 * Example: const {contactsController} = require('./contactsController');
 * ***********************/
module.exports = contactsController;