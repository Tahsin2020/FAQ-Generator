import { NextFunction, Request, Response } from "express";
import Page from "../models/Page.js";
import PageSet from "../models/PageSet.js";

// Get all questions
export const getPages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  try {
    //gets the profile
    const pageset = await PageSet.findOne({ username: username });

    const pages = pageset.pages;

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
  const { username, title } = req.body;
  try {
    //gets the profile
    const pageset = await PageSet.findOne({ username: username });
    const page = { title: title, questions: [] };

    pageset.pages.push(page);

    await pageset.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

// Get all questions
export const deletePage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, title } = req.body;
  try {
    //gets the profile
    const pageset = await PageSet.findOne({ username: username });
    const pages = pageset.pages;

    for (let i = 0; i < pages.length; i++) {
      if (pages[i].title == title) {
        pages.splice(i, 1);
        break;
      }
    }

    pageset.save();

    // page.deleteOne();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
