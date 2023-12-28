import db from "../db";
import { RequestHandler } from "express";

export const addReview: RequestHandler<
  {},
  {},
  { name?: string; restaurant_id?: number; review?: string; rating?: number }
> = async (req, res) => {
  if (!req.body.name || !req.body.rating || !req.body.restaurant_id || !req.body.review) {
    return res.status(400).json({ error: "invalid input" });
  }
  const queryResult = await db.query(
    "INSERT INTO reviews(name, restaurant_id, review, rating) VALUES($1, $2, $3, $4) RETURNING *",
    [req.body.name, req.body.restaurant_id, req.body.review, req.body.rating]
  );
  res.json({ count: queryResult.rowCount, review: queryResult.rows[0] });
};
