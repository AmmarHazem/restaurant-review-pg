import db from "../db";
import { RequestHandler } from "express";

export const getRestaurants: RequestHandler<{}, {}, {}> = async (req, res) => {
  const queryResult = await db.query<{ id: number; name: string }>("SELECT * FROM restaurants");
  res.json({ count: queryResult.rowCount, restaurants: queryResult.rows });
};

export const getRestaurantDetails: RequestHandler<{ id: string }, {}, {}> = async (req, res) => {
  const queryResult = await db.query("SELECT * from restaurants WHERE id = $1", [req.params.id]);
  if (!queryResult.rowCount) {
    return res.status(404).json({ status: `id ${req.params.id} not found` });
  }
  res.json({ count: queryResult.rowCount, restaurant: queryResult.rows[0] });
};

export const createRestaurant: RequestHandler<{}, {}, { name?: string; location?: string; price_range?: string }> = async (
  req,
  res
) => {
  if (!req.body.name || !req.body.location || !req.body.price_range) {
    return res.status(400).json({ error: "invalid input" });
  }
  const queryResult = await db.query("INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *", [
    req.body.name,
    req.body.location,
    req.body.price_range,
  ]);
  res.json({ count: queryResult.rowCount, restaurant: queryResult.rows[0] });
};

export const updateRestaurant: RequestHandler<
  { id: string },
  {},
  { name?: string; location?: string; price_range?: string }
> = async (req, res) => {
  if (!req.body.name || !req.body.location || !req.body.price_range) {
    return res.status(400).json({ error: "invalid input" });
  }
  const queryResult = await db.query(
    "UPDATE restaurants SET name = $2, location = $3, price_range = $4 WHERE id = $1 RETURNING *",
    [req.params.id, req.body.name, req.body.location, req.body.price_range]
  );
  res.json({ count: queryResult.rowCount, restaurant: queryResult.rows[0] });
};

export const deleteRestaurant: RequestHandler<{ id: string }, {}, {}> = async (req, res) => {
  const queryResult = await db.query("DELETE FROM restaurants WHERE id = $1 RETURNING *", [req.params.id]);
  res.json({ count: queryResult.rowCount, restaurant: queryResult.rows[0] });
};
