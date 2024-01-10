import { NextFunction, Request, Response } from "express";
import PageSet from "../models/PageSet.js";

// Get all questions
export const getPageSet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  try {
    //gets the profile
    const pageset = await PageSet.findOne({ username: username });

    return res.status(200).json({ message: "OK", pages: pageset.pages });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
