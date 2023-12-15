import { Typography } from "@mui/material";
import { getPages } from "../helpers/api-communicator";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pages, setPages] = useState<any[]>([]);
  useEffect(() => {
    getPages()
      .then((data) => {
        console.log(data);
        setPages(data.pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div style={{ margin: "10%", width: "85vw" }}>
      <Typography variant="h1">Username </Typography>
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
                return;
                <Typography variant="h3" style={{ marginTop: "2vh" }}>
                  {question.heading}
                </Typography>;
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
      </div>
    </div>
  );
};

export default Home;
