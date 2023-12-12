import axios from "axios";

export const getPages = async () => {
  const res = await axios.get("/page/");
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const getQuestions = async (title:String) => {
  
  const res = await axios.post("/page/question/", {
    title,
  });
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const modifyQuestions = async (title:String,Modifiedquestions: any) => {
  const res = await axios.post("/page/question/modify", {
    title,
    Modifiedquestions,
  });
  if (res.status !== 201) {
    throw new Error("Unable to modify Questions");
  }
  const data = await res.data;
  return data;
};
