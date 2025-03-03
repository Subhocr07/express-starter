import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import validate from "../middlewares/validate.middleware";
import { createUserSchema } from "../validators/user.validator";

const router = Router();

router.post("/create", validate(createUserSchema), createUser);

export default router;
