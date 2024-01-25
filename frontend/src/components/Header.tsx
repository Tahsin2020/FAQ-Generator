import { useState } from "react";
import { Question } from "../types/types";
import { useAuth } from "../context/AuthContext";

type Props = {
  username: String;
  question: Question;
  id: number;
  Aria_Hidden: boolean;
  toggleView: (id: number) => void;
  DeleteHeading: (id: number) => void;
  ModifyHeading: (id: number, value: String) => void;
};

const Header = ({
  username,
  question,
  id,
  Aria_Hidden,
  toggleView,
  DeleteHeading,
  ModifyHeading,
}: Props) => {
  const [modifyHeadervalue, setmodifyHeaderValue] = useState<string>("");
  const [modifyingHeader, setModifyingHeader] = useState<boolean>(false);
  const [modifying, setModifying] = useState<number | undefined>(undefined);
  const [modifyvalue, setmodifyValue] = useState<string>("");
  const [value, setValue] = useState("");

  const DeleteSubHeading = (id: number) => {
    question.subheadings.splice(id, 1);
    toggleView(id);
  };

  const ModifySubheading = (id: number) => {
    setmodifyValue(question.subheadings[id].toString());
    setModifying(id);
  };
  const auth = useAuth();

  return (
    // Must add code to automatically replace entered headers (with _) to a space
    // Must also add code to remove duplicates.
    <div className="FAQ-header" key={id}>
      <button
        id={"FAQ-button-" + id}
        aria-expanded={Aria_Hidden}
        style={{ display: "flex", flexDirection: "row" }}
        onClick={() => toggleView(id)}
      >
        {modifyingHeader ? (
          <textarea
            placeholder="Change Header here and press enter"
            value={modifyHeadervalue}
            style={{
              width: "70vw",
              height: "10vh",
              marginTop: "3vh",
            }}
            onChange={(e) => {
              setmodifyHeaderValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ModifyHeading(id, modifyHeadervalue);
                setmodifyHeaderValue("");
                setModifyingHeader(false);
              }
            }}
          />
        ) : (
          <div className="FAQ-title">{question.heading}</div>
        )}

        {auth?.user?.username !== username ? (
          <></>
        ) : (
          <>
            <button
              className="icon ml"
              onClick={() => {
                setmodifyHeaderValue(question.heading.toString());
                setModifyingHeader(true);
              }}
            >
              Modify
            </button>
            <button
              className="icon mr"
              onClick={() => {
                DeleteHeading(id);
              }}
            >
              Delete
            </button>
          </>
        )}
        <div className="icon" aria-hidden="true"></div>
      </button>
      {!Aria_Hidden ? (
        <></>
      ) : (
        <div className="FAQ-subheaders">
          {question?.subheadings.map((subheading, id: number) => {
            if (modifying == id)
              return (
                <>
                  {auth?.user?.username !== username ? (
                    <></>
                  ) : (
                    <p className="FAQ-subheader" key={id}>
                      <textarea
                        placeholder="Change Text here and press enter"
                        value={modifyvalue}
                        style={{
                          width: "100%",
                          height: "20vh",
                        }}
                        onChange={(e) => {
                          setmodifyValue(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            question.subheadings[id] = modifyvalue;
                            setmodifyValue("");
                            setModifying(undefined);
                          }
                        }}
                      />
                    </p>
                  )}
                </>
              );
            return (
              <div style={{ display: "flex" }}>
                <p key={id} className="FAQ-subheader">
                  {subheading}
                </p>
                {auth?.user?.username !== username ? (
                  <></>
                ) : (
                  <>
                    <button
                      style={{ padding: "20px" }}
                      className="modify"
                      onClick={() => {
                        ModifySubheading(id);
                      }}
                    >
                      Modify
                    </button>
                    <button
                      style={{ padding: "20px" }}
                      className="delete"
                      onClick={() => {
                        DeleteSubHeading(id);
                      }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            );
          })}

          {auth?.user?.username !== username ? (
            <></>
          ) : (
            <p className="FAQ-subheader">
              <textarea
                placeholder="Type in an answer here to the above question and press enter"
                value={value}
                style={{
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  border: "2px solid",
                  width: "100%",
                  height: "20vh",
                }}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    question.subheadings.push(value);
                    setValue(
                      "Type in an answer here to the above question and press enter"
                    );
                  }
                }}
              />
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
