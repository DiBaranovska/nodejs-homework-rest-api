
import contactsServis from "../models/contacts.js";
import { HttpError } from "../helpers/index.js";
import {ctrlWrapper} from "../decorators/index.js"


const getAll = async (_, res, next) => {
    const allContacts = await contactsServis.listContacts();
    res.json(allContacts);
}

const getById = async (req, res, next) => {
    const { contactId } = req.params;
    const getById = await contactsServis.getContactById(contactId);
    if (!getById) {
      throw HttpError(404, "Not found");
    }
    res.json(getById);
}

const addContact = async (req, res, next) => {

    const contact = await contactsServis.addContact(req.body);
    res.status(201).json(contact);
}

const removeContact = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await contactsServis.removeContact(contactId);
    if (!contact) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
}

const updateContact  = async (req, res, next) => {
    const { error } = contactAddShema.validate(req.body);
  
    const { contactId } = req.params;
    const result = await contactsServis.updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    addContact: ctrlWrapper(addContact),
    removeContact: ctrlWrapper(removeContact),
    updateContact: ctrlWrapper(updateContact)
}