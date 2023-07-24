import express from "express";
const router = express.Router();
import {
  createTour,
  deleteTour,
  getSingleTour,
  updateTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/TourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// create new tour
router.post("/",verifyAdmin, createTour);

// update new tour
router.put("/:id",verifyAdmin, updateTour);

// delete new tour
router.delete("/:id",verifyAdmin, deleteTour);

// get single new tour
router.get("/:id", getSingleTour);

// get all tour
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

// get featured roye
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
