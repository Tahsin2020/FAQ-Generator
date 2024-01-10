import mongoose from "mongoose";
import Page from "./Page.js";

// I have to change what's inside these objects/schemas. I don't think I need chatschema, but I am wondering about skills.

const PageSetSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  pages: [Page],
});

export default mongoose.model("PageSet", PageSetSchema);
