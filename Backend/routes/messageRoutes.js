import express from "express"
import secureRoute from "../middleware/secureRoute.js";
import { sendMessage } from "../Controllers/messageController.js";
const router = express.Router();
router.post("/send/:id",secureRoute,sendMessage);

export default router