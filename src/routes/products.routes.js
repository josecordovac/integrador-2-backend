import { Router } from "express";
import {
  getData,
  saveData,
  getProyects,
  createNewProyect,
  getProductById,
  deleteProductById,
  getTotalProducts,
  updateProductById,
} from "../controllers/products.controller";

const router = Router();

router.post("/get-data", getData);

router.post("/save-data", saveData);

router.get("/proyects", getProyects);

router.post("/proyects", createNewProyect);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
