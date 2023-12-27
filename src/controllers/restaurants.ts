import { RequestHandler } from "express";

export const getRestaurants: RequestHandler<{}, {}, {}> = (req, res) => {
  res.json({ restaurants: [] });
};

export const getRestaurantDetails: RequestHandler<{ id: string }, {}, {}> = (req, res) => {
  res.json({ restaurant: { id: req.params.id } });
};

export const createRestaurant: RequestHandler<{}, {}, {}> = (req, res) => {
  console.log("body", req.body);
  res.json({ restaurant: { id: "CREATED" } });
};

export const updateRestaurant: RequestHandler<{ id: string }, {}, {}> = (req, res) => {
  res.json({ restaurant: { id: `UPDATED ${req.params.id}` } });
};

export const deleteRestaurant: RequestHandler<{ id: string }, {}, {}> = (req, res) => {
  res.json({ restaurant: { id: `DELETED ${req.params.id}` } });
};
