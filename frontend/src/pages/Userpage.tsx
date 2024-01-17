import { Typography } from "@mui/material";
import { addPage, getPages } from "../helpers/api-communicator";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Userpage = () => {
  const auth = useAuth();
  let url = location.pathname.split("/");
  let username = url[url.length - 2].split("%20").join(" ");

  const [value, setValue] = useState("");
  const [pages, setPages] = useState<any[]>([]);
  useEffect(() => {
    getPages(username)
      .then((data) => {
        console.log(data);
        if (data.pages) setPages(data.pages);
      })
      .catch((err) => {
        console.log(err);
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
              <Link to={page.title}>
                <Typography
                  className="bg-white hover:bg-gray-300"
                  variant="h2"
                  style={{
                    marginTop: "2vh",
                    marginLeft: "2vw",
                    padding: "20px",
                    maxWidth: "50%",
                  }}
                >
                  {page.title}
                </Typography>
              </Link>
              <div style={{ marginLeft: "20vw", backgroundColor: "white" }}>
                {page.questions.map((question: any, id: number) => {
                  return (
                    <Typography
                      variant="h3"
                      style={{ marginTop: "2vh" }}
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
  );
};

export default Userpage;
