import { Router } from "express";
import { TechnicianAvailabilityController } from "./TechnicianAvailabilityController.js";

const technicianController = new TechnicianAvailabilityController()
const technicianRouter = Router()

technicianRouter.get("/", technicianController.listAll)
technicianRouter.post("/", technicianController.create);

export { technicianRouter };