const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
// guardamos la ruta del archivo contacts.json

// Función para cargar la lista de contactos desde el archivo JSON.
async function loadContacts() {
	try {
		const data = await fs.readFile(contactsPath, "utf-8");
		// se guarda la informacion q viene del archivo contacts.json
		return JSON.parse(data);
	} catch (error) {
		return [];
	}
}

// Función para guardar la lista de contactos en el archivo JSON.
async function saveContacts(contacts) {
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

// Función para listar todos los contactos.
async function listContacts() {
	const contacts = await loadContacts();
	console.table(contacts);
}

// Función para obtener un contacto por su ID.
async function getContactById(contactId) {
	const contacts = await loadContacts();
	const contact = contacts.find((c) => c.id === contactId);
	if (contact) {
		console.table([contact]);
	} else {
		console.log("Contact not found.");
	}
}

// Función para agregar un nuevo contacto.
async function addContact(name, email, phone) {
	const contacts = await loadContacts();
	const newContact = {
		id: Date.now().toString(),
		name,
		email,
		phone,
	};
	contacts.push(newContact);
	await saveContacts(contacts);
	console.log("Contact added:");
	console.table([newContact]);
}

// Función para eliminar un contacto por su ID.
async function removeContact(contactId) {
	const contacts = await loadContacts();
	const index = contacts.findIndex((c) => c.id === contactId);
	if (index !== -1) {
		const removedContact = contacts.splice(index, 1)[0];
		await saveContacts(contacts);
		console.log("Contact removed:");
		console.table([removedContact]);
	} else {
		console.log("Contact not found.");
	}
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
