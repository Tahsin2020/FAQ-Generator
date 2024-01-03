import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chat/new", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get("/chat/all-chats");
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const deleteUserChats = async () => {
  const res = await axios.delete("/chat/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
export const getPages = async () => {
  const res = await axios.get("/page/");
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const addPage = async (title: String) => {
  const res = await axios.post("/page/add", {
    title,
  });
  if (res.status !== 200) {
    throw new Error("Unable to add page");
  }
  const data = await res.data;
  return data;
};

export const getQuestions = async (title: String) => {
  const res = await axios.post("/page/question/", {
    title,
  });
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const modifyQuestions = async (
  title: String,
  Modifiedquestions: any
) => {
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
