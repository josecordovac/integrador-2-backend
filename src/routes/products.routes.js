import { Router } from "express";
import {
  getData,
  saveData
} from "../controllers/products.controller";

const router = Router();

router.post("/get-data", getData);

router.post("/save-data", saveData);

export default router;
