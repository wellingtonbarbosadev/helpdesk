import { Router } from "express";
import { ServicesController } from "./ServicesController.js";

const serviceRoutes = Router()
const serviceController = new ServicesController();

serviceRoutes.get("/", serviceController.listServices)
serviceRoutes.post("/", serviceController.createService);

export {serviceRoutes}