import axios from "axios";

export const getQuestions = async () => {
  const res = await axios.get("/question/");
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const modifyQuestions = async (
  Modifiedquestions:any
) => {
  const res = await axios.post("/question/modify", { Modifiedquestions });
  if (res.status !== 201) {
    throw new Error("Unable to modify Questions");
  }
  const data = await res.data;
  return data;
};
