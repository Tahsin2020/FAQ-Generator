import { Typography } from "@mui/material";
import {
  addPage,
  deletePage,
  getPages,
  modifyPageTitle,
} from "../helpers/api-communicator";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Notfound from "./Notfound";

const Userpage = () => {
  const auth = useAuth();
  let url = location.pathname.split("/");
  let username = url[url.length - 2].split("%20").join(" ");

  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [pages, setPages] = useState<any[]>([]);
  const [modifyCheck, setmodifyCheck] = useState<boolean[]>([]);
  const [newTitle, setnewTitle] = useState("");
  useEffect(() => {
    getPages(username)
      .then((data) => {
        if (data.pages) setPages(data.pages);
        console.log(data);
        length = data.pages.length;
        setmodifyCheck([]);
        for (let i = 0; i < length; i++) {
          modifyCheck.push(false);
        }
        setmodifyCheck([...modifyCheck]);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);
  const InsertPage = (value: string) => {
    if (auth?.user?.username == username) {
      addPage(value, username);
      pages.push({ title: value, questions: [] });
      setValue("");
    }
  };
  return (
    <>
      {error ? (
        <Notfound />
      ) : (
        <>
          <div style={{ margin: "10%", width: "85vw" }}>
            <Typography variant="h1">Your List of Pages </Typography>
            {pages.map((page, id) => {
              if (page.questions.length > 3) page.questions.length = 3;
              return (
                <div
                  style={{
                    border: "5px solid black",
                    width: "100%",
                    marginBottom: "10px",
                    backgroundColor: "black",
                  }}
                  key={id}
                >
                  {modifyCheck[id] == true ? (
                    <textarea
                      value={newTitle}
                      placeholder="Type your new Title here"
                      style={{
                        marginTop: "2vh",
                        marginLeft: "2vw",
                        padding: "20px",
                        width: "50%",
                        fontSize: "4em",
                        fontFamily: "sans-serif",
                      }}
                      onChange={(e) => {
                        setnewTitle(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          modifyPageTitle(page.title, newTitle, username);
                          setnewTitle("Type your new Title here");
                          page.title = newTitle;
                          setPages([...pages]);
                          modifyCheck[id] = false;
                          setmodifyCheck([...modifyCheck]);
                        }
                      }}
                    />
                  ) : (
                    <div style={{ display: "flex" }}>
                      <Typography
                        className="bg-white hover:bg-gray-300"
                        variant="h2"
                        style={{
                          marginTop: "2vh",
                          marginLeft: "2vw",
                          marginRight: "30%",
                          padding: "20px",
                          width: "50%",
                        }}
                      >
                        <Link
                          to={page.title}
                          style={{ fontFamily: "sans-serif" }}
                        >
                          {page.title}
                        </Link>
                      </Typography>

                      {auth?.user?.username == username ? (
                        <>
                          <button
                            onClick={() => {
                              console.log(modifyCheck);
                              for (let i = 0; i < length; i++) {
                                modifyCheck[i] = false;
                              }
                              modifyCheck[id] = true;
                              setmodifyCheck([...modifyCheck]);
                              setnewTitle(page.title);
                            }}
                            style={{
                              color: "white",
                              fontSize: "2em",
                              padding: "20px",
                            }}
                          >
                            Edit
                          </button>
                          <button
                            style={{
                              color: "white",
                              fontSize: "2em",
                              padding: "20px",
                            }}
                            onClick={() => {
                              deletePage(page.title, username);
                              pages.splice(id, 1);
                              setPages([...pages]);
                            }}
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
                  <div style={{ marginLeft: "20vw", backgroundColor: "white" }}>
                    {page.questions.map((question: any, id: number) => {
                      return (
                        <Typography
                          variant="h3"
                          style={{ marginTop: "2vh", padding: "10px" }}
                          key={id}
                        >
                          {" "}
                          {question.heading}{" "}
                        </Typography>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {auth?.user?.username == username ? (
              <div
                style={{
                  border: "5px solid black",
                  width: "100%",
                  marginBottom: "10px",
                  backgroundColor: "black",
                }}
              >
                <Typography
                  variant="h2"
                  style={{ marginTop: "2vh", marginLeft: "2vw" }}
                >
                  <textarea
                    style={{ fontSize: "1em", width: "80vw", height: "15vh" }}
                    value={value}
                    placeholder="Insert title for new page"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </Typography>
                <div style={{ marginLeft: "20vw" }}>
                  <Typography variant="h3" style={{ marginTop: "2vh" }}>
                    <button
                      style={{
                        backgroundColor: "white",
                        fontSize: "1em",
                      }}
                      onClick={() => {
                        InsertPage(value);
                      }}
                    >
                      Click here to create a new page with inserted title
                    </button>
                  </Typography>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Userpage;
