import express from "express";
import eventController from "../controllers/eventController.js";

const router = express.Router();

router.get("/", eventController.getEvents);
router.get("/:event_id", eventController.getEventById);
router.get("/locations/:location_id", eventController.getEventsByLocationId);

export default router;
