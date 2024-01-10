import mongoose from "mongoose";

// I have to change what's inside these objects/schemas. I don't think I need chatschema, but I am wondering about skills.

const QuestionSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  subheadings: [
    {
      type: String,
    },
  ],
});

export default QuestionSchema;
