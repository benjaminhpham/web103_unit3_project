import express from "express";
import locationController from "../controllers/locationController.js";

const router = express.Router();

router.get("/", locationController.getLocations);
router.get("/:location_id", locationController.getLocationById);

export default router;
