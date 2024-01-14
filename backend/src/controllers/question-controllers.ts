import { NextFunction, Request, Response } from "express";
import Question from "../models/Question.js";
import PageSet from "../models/PageSet.js";

// Get all questions
export const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, title } = req.params;
  try {
    const pageset = await PageSet.findOne({ username: username });
    const pages = pageset.pages;

    for (let i = 0; i < pages.length; i++) {
      if (pages[i].title == title) {
        return res
          .status(200)
          .json({ message: "OK", questions: pages[i].questions });
      }
    }

    return res.status(404).json({ message: "No Page Found" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

// Modify/Delete the question collection
export const modifyQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.params;
  const { Modifiedquestions, title } = req.body;
  try {
    const pageset = await PageSet.findOne({ username: username });
    const pages = pageset.pages;

    for (let i = 0; i < pages.length; i++) {
      if (pages[i].title == title) {
        pages[i].questions = Modifiedquestions;
        await pageset.save();

        return res
          .status(200)
          .json({ message: "OK", questions: pages[i].questions });
      }
    }

    return res.status(404).json({ message: "No Item Found" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
