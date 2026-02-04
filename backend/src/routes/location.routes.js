import express from "express";
import { locationController } from "../controllers/location.controllers.js";
const route = express.Router();

route.post("/", locationController);

export default route;
