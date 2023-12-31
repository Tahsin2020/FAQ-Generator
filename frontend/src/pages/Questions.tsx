import { useEffect, useState } from "react";
import "./Questions.css";
import { getQuestions, modifyQuestions } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { Question } from "../types/types";
import Header from "../components/Header";
import Button from "@mui/material/Button";

function Questions() {
  let title = location.pathname.split("/").join("").split("%20").join(" ");

  console.log(title);
  console.log(location.pathname);

  const [value, setValue] = useState("");
  var Aria_Hidden = [false];
  const [access, setAccess] = useState(false);
  const [Questions, setQuestions] = useState<any>([]);

  function UpdatePage() {
    modifyQuestions(title, Questions);
  }

  const DeleteHeading = (id: number) => {
    Questions.splice(id, 1);
    toggleView(-1);
  };

  const ModifyHeading = (id: number, value: String) => {
    Questions[id].heading = value;
    toggleView(-1);
  };

  useEffect(() => {
    window.onbeforeunload = confirmExit;
    function confirmExit() {
      return "show warning";
    }

    if (!access)
      getQuestions(title)
        .then((data) => {
          setAccess(true);
          setQuestions(data.questions);
          Aria_Hidden = [];
          for (let i = 0; i < Questions.length; i++) {
            Aria_Hidden.push(false);
          }
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
  }, []);

  const [Aria_Hidden_Array, setAria_Hidden_Array] = useState(Aria_Hidden);

  function toggleView(id: number) {
    for (let i = 0; i < Questions.length; i++) {
      if (id == i) Aria_Hidden[i] = true;
      else Aria_Hidden[i] = false;
    }
    // I don't understand why this works
    setAria_Hidden_Array([...Aria_Hidden]);
    // But this doesn't work
    //setAria_Hidden_Array(Aria_Hidden);
  }
  return (
    <>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {!Questions ? (
          <div style={{ width: "90vw" }}>
            The page hasn't loaded yet. If they haven't loaded even after
            waiting a minute, reload the page or check your url.
          </div>
        ) : (
          <div className="FAQ">
            {Questions.map((question: Question, id: number) => {
              return (
                <>
                  <Header
                    key={id}
                    question={question}
                    id={id}
                    Aria_Hidden={Aria_Hidden_Array[id]}
                    toggleView={toggleView}
                    DeleteHeading={DeleteHeading}
                    ModifyHeading={ModifyHeading}
                  />
                </>
              );
            })}
            <div className="FAQ-header">
              <textarea
                placeholder="Type in a Question here and press enter"
                value={value}
                style={{
                  width: "90vw",
                  height: "20vh",
                }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    var ModifiedQuestions = {
                      heading: value,
                      subheadings: [],
                      ids: [],
                    };
                    Questions.push(ModifiedQuestions);
                    setValue("");
                  }
                }}
              />
            </div>
          </div>
        )}
        {!Questions ? (
          <></>
        ) : (
          <div
            style={{
              marginTop: "10vh",
              marginLeft: "25w",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" onClick={UpdatePage}>
              Save Page
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Questions;
