import express, { Router } from"express";
import{getAllUsers} from "../controllers/usercontroller.js";


const router = express.Router();
router.get("./user",getAllUsers);
export default router;

