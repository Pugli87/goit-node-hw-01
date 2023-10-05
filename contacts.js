const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

/*
fs.readFile("contact.js");
fs.writeFile("contact.js");
*/
/*
 * Comenta y anota el valor
 * const contactsPath = ;
 */

// TODO: documenta cada función
function listContacts() {
	console.log("list");
	// ...tu código
}

function getContactById(contactId) {
	// ...tu código
	console.log("get");
}

function removeContact(contactId) {
	console.log("remove");
	// ...tu código
}

function addContact(name, email, phone) {
	console.log("add");
	// ...tu código
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
