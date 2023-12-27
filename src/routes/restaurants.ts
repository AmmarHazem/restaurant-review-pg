import express from "express";
import {
  createRestaurant,
  getRestaurants,
  getRestaurantDetails,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurants";

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", createRestaurant);
router.put("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);
router.get("/:id", getRestaurantDetails);

export default router;
