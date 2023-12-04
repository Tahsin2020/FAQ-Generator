import { NextFunction, Request, Response } from "express";
import Question from "../models/Question.js";

// Get all questions
export const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //gets the profile
    const questions = await Question.find();

    return res.status(200).json({ message: "OK", questions: questions });
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
  const { Modifiedquestions } = req.body;
  try {
    //user token check
    const questions = await Question.find();

    questions.splice(0, questions.length);

    for (let i = 0; i < Modifiedquestions.length; i++) {
      questions.push(Modifiedquestions[i]);
    }


    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
