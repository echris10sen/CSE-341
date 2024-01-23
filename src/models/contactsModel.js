/******************************************
 * Description: Model for the Contacts API
 * Table of Contents:
 * Imports:
 *      -client: The client object
 *      -ObjectId: The ObjectId constructor from the Node.js driver
 * Variables:
 *      -contactsModel: The contactsModel object
 * Methods:
 *      -contactsModel.contactsList: Get the list of contacts
 *      -contactsModel.getContact: Get a contact by ID
 * Exports
 *      -contactsModel: The contactsModel object
 * ***************************************/

/***********************
 * Imports:
 * ***********************/
const client = require('../config/mongodbConnect');
const { ObjectId } = require('mongodb');

/***********************
 * Variables:
 * ***********************/
const contactsModel = {}

/***********************
 * Methods:
 * ***********************/
/******************************************
 * Name: contactsModel.contactsList
 * Description: List contacts in the database
 * Parameters: None
 * Returns: A Promise that resolves to an array of json objects
 * Notes: None
 * Issues: None
 * ***************************************/
contactsModel.getContactList = async function() {
    try {
        const database = await client.db("cse341");
        const collection = await database.collection("contacts");
        
        const cursor = await collection.find({});
        const results = await cursor.toArray();
        return results;
    } catch (e) {
        console.error(e);
    }
};

/******************************************
 * Name: contactsModel.getContact
 * Description: Get a single contact from the database
 * Parameters: id
 * Returns: A Promise that resolves to a json object
 * Notes: None
 * Issues: None
 * ***************************************/
contactsModel.getContact = async function(id) {
    try {
        const database = await client.db("cse341");
        const collection = await database.collection("contacts");
        
        console.log("In getContact in contactsModel.js")
        console.log("id: ", id);
        const cursor = await collection.find({_id: new ObjectId(id)});
        const results = await cursor.toArray();
        console.log("results: ", results);
        return results;
    } catch (e) {
        console.error(e);
    }
};

/***********************
 * Exports:
 * contactsModel
 * -Type: Object
 * -Description: The contactsModel object
 * -Example: const contactsModel = require('./contactsModel');
 * -Notes: None
 * -Issues: None
 * ***********************/
module.exports = contactsModel;
