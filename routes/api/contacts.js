import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { validateBody } from "../../decorators/index.js"
import contactShema from "../../shemas/contacts-shemas.js"
import {isEmptyBody} from "../../middlewares/index.js"

const router = express.Router();

router.get("/", contactsController.getAll );

router.get("/:contactId", contactsController.getById);

router.post("/", isEmptyBody, validateBody(contactShema.contactAddShema), contactsController.addContact);

router.delete("/:contactId", contactsController.removeContact);

router.put("/:contactId", isEmptyBody, validateBody(contactShema.contactAddShema), contactsController.updateContact);

export default router;