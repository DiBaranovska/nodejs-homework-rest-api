import express from "express";

import registerController from "../../controllers/user-controller.js";

import usersSchemas from "../../shemas/users-schemas.js";

import { validateBody } from "../../decorators/index.js";

import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersSchemas.userSignupSchema),
  registerController.register
);

authRouter.post(
  "/login",
  validateBody(usersSchemas.userSignupSchema),
  registerController.login
);

authRouter.get("/current", authenticate, registerController.getCurrent);

authRouter.post("/logout", authenticate, registerController.logout);

authRouter.patch("/", authenticate, registerController.subscriptionUpdate);

export default authRouter;
