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
  username: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { username, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to sign up");
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

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to log out");
  }
  const data = await res.data;
  return data;
};

export const getPages = async (username: String) => {
  const res = await axios.get("/pageset/page/" + username + "");
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const addPage = async (title: String, username: String) => {
  const res = await axios.post("/pageset/page/add/" + username + "", {
    title,
  });
  if (res.status !== 200) {
    throw new Error("Unable to add page");
  }
  const data = await res.data;
  return data;
};
export const deletePage = async (title: String, username: String) => {
  const res = await axios.post("/pageset/page/delete/" + username + "", {
    title,
  });
  if (res.status !== 200) {
    throw new Error("Unable to delete page");
  }
  const data = await res.data;
  return data;
};
export const modifyPageTitle = async (
  old_title: String,
  new_title: String,
  username: String
) => {
  const res = await axios.post("/pageset/page/modifyTitle/" + username + "", {
    old_title,
    new_title,
  });
  if (res.status !== 200) {
    throw new Error("Unable to modify page title");
  }
  const data = await res.data;
  return data;
};

export const getQuestions = async (title: String, username: String) => {
  const res = await axios.get(
    "/pageset/page/question/" + username + "/" + title
  );
  if (res.status !== 200) {
    throw new Error("Unable to access questions");
  }
  const data = await res.data;
  return data;
};

export const modifyQuestions = async (
  title: String,
  Modifiedquestions: any,
  username: String
) => {
  const res = await axios.post(
    "/pageset/page/question/modify/" + username + "",
    {
      title,
      Modifiedquestions,
    }
  );
  if (res.status !== 201) {
    throw new Error("Unable to modify Questions");
  }
  const data = await res.data;
  return data;
};
