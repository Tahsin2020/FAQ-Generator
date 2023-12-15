import { NextFunction, Request, Response } from "express";
import Question from "../models/Question.js";
import Page from "../models/Page.js";

// Get all questions
export const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;
  try {
    //gets the profile
    const page = await Page.findOne({ title: title });

    return res.status(200).json({ message: "OK", questions: page.questions });
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
  const { Modifiedquestions, title } = req.body;
  try {
    const page = await Page.findOne({ title: title });
    console.log(Modifiedquestions);
    console.log(title);
    //user token check
    page.questions = Modifiedquestions;

    await page.save();

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
