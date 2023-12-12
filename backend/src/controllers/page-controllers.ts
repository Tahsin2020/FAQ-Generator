import { NextFunction, Request, Response } from "express";
import Page from "../models/Page.js";

// Get all questions
export const getPages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //gets the profile
    const pages = await Page.find();
    console.log("HI");

    return res.status(200).json({ message: "OK", pages: pages });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

// Modify/Delete the question collection
export const addPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;
  try {
    //gets the profile
    const publicprofile = new Page({ title });
    await publicprofile.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
