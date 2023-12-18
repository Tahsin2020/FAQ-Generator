import mongoose from "mongoose";
import QuestionSchema from "./Question.js";

// I have to change what's inside these objects/schemas. I don't think I need chatschema, but I am wondering about skills.

const PageSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  questions: [QuestionSchema],
});

export default mongoose.model("Page", PageSchema);
