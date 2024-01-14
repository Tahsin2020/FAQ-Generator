import { Typography } from "@mui/material";
import { addPage, getPages } from "../helpers/api-communicator";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let url = location.pathname.split("/");
  let username = url[-1];
  const [value, setValue] = useState("");
  const [pages, setPages] = useState<any[]>([]);
  useEffect(() => {
    getPages(username)
      .then((data) => {
        setPages(data.pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const InsertPage = (value: string) => {
    addPage(value, username);
    pages.push({ title: value, questions: [] });
    setValue("");
  };
  return (
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
                variant="h2"
                style={{ marginTop: "2vh", marginLeft: "2vw" }}
              >
                {page.title}
              </Typography>
            </Link>
            <div style={{ marginLeft: "20vw" }}>
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
              style={{ fontSize: "0.75em" }}
              onClick={() => {
                InsertPage(value);
              }}
            >
              Create new page
            </button>
          </Typography>
        </div>
      </div>
      {/* <div
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
          Title
        </Typography>
        <div style={{ marginLeft: "20vw" }}>
          <Typography variant="h3" style={{ marginTop: "2vh" }}>
            Question
          </Typography>
          <Typography variant="h3" style={{ marginTop: "2vh" }}>
            Question
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: "2vh", marginBottom: "2vh" }}
          >
            Question
          </Typography>
        </div>
      </div>

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
          Title
        </Typography>
        <div style={{ marginLeft: "20vw" }}>
          <Typography variant="h3" style={{ marginTop: "2vh" }}>
            Question
          </Typography>
          <Typography variant="h3" style={{ marginTop: "2vh" }}>
            Question
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: "2vh", marginBottom: "2vh" }}
          >
            Question
          </Typography>
        </div>
      </div>

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
          Title
        </Typography>
        <div style={{ marginLeft: "20vw" }}>
          <Typography variant="h3" style={{ marginTop: "2vh" }}>
            Question
          </Typography>
          <Typography variant="h3" style={{ marginTop: "2vh" }}>
            Question
          </Typography>
          <Typography
            variant="h3"
            style={{ marginTop: "2vh", marginBottom: "2vh" }}
          >
            Question
          </Typography>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
