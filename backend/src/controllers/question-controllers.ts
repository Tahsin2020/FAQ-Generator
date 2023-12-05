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

    for (let i = 0; i < questions.length; i++) {
      questions[i].deleteOne();
    }

    console.log(Modifiedquestions)
    for (let i = 0; i < Modifiedquestions.length; i++) {
      var newquestion = new Question({
        heading: Modifiedquestions[i].heading,
        subheadings: Modifiedquestions[i].subheadings,
        ids: Modifiedquestions[i].ids,
      });
      await newquestion.save();
    }

    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};
