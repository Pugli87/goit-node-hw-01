const { Command } = require("commander");
const program = new Command();
const {
	listContacts,
	getContactById,
	removeContact,
	addContact,
} = require("./contacts");

// listContacts();
// getContactById("AeHIrLTr6JkxGE6SN-0Rw");
// removeContact("AeHIrLTr6JkxGE6SN-0Rw");
// addContact("Carlos Pugliese", "pugliese8725@gmail.com", "3135436728");

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: refactorizar
function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			listContacts();
			break;

		case "get":
			getContactById(id);
			break;

		case "add":
			addContact(name, email, phone);
			break;

		case "remove":
			removeContact(id);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction(argv);
