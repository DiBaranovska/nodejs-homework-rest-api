import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import { validateBody } from "../../decorators/index.js";
import contactShema from "../../shemas/contacts-shemas.js";
import {
  authenticate,
  isEmptyBody,
  isValidId,
  isEmptyBodyFavorite,
} from "../../middlewares/index.js";

const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAll);

router.get("/:contactId", isValidId, contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactShema.contactAddShema),
  contactsController.addContact
);

router.delete("/:contactId", isValidId, contactsController.removeContact);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactShema.contactAddShema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBodyFavorite,
  validateBody(contactShema.contactUpdateFavoriteSchem),
  contactsController.updateFavorite
);

export default router;
