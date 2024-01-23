import { useEffect, useState } from "react";
import "../css/Questions.css";
import { getQuestions, modifyQuestions } from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { Question } from "../types/types";
import Header from "../components/Header";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContext";

function Questions() {
  const auth = useAuth();

  let url = location.pathname.split("/");
  let username = url[url.length - 2].split("%20").join(" ");

  let title = url[url.length - 1].split("%20").join(" ");

  console.log(title);
  console.log(username);

  const [value, setValue] = useState("");
  var Aria_Hidden = [false];
  const [access, setAccess] = useState(false);
  const [Questions, setQuestions] = useState<any>([]);

  function UpdatePage() {
    modifyQuestions(title, Questions, username);
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
      getQuestions(title, username)
        .then((data) => {
          setAccess(true);
          setQuestions(data.questions);
          Aria_Hidden = [];
          for (let i = 0; i < Questions.length; i++) {
            Aria_Hidden.push(false);
          }
          if (Questions.length > 0) {
            toggleView(0);
          }
          toast.success("Successfully loaded page", { id: "loadpage" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadpage" });
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
        <h2>{title}</h2>
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
            {auth?.user?.username == username ? (
              <></>
            ) : (
              <div className="FAQ-header">
                <textarea
                  aria-atomic={true}
                  placeholder="Type in a Question here and press enter"
                  value={value}
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    border: "2px solid",
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
                      setValue("Type in a Question here and press enter");
                    }
                  }}
                />
              </div>
            )}
          </div>
        )}

        {auth?.user?.username == username ? (
          <></>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default Questions;
