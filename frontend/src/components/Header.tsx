import { useState } from "react";
import { Question } from "../types/types";

type Props = {
  question: Question;
  id: number;
  Aria_Hidden: boolean;
  toggleView: (id: number) => void;
};

const Header = ({ question, id, Aria_Hidden, toggleView }: Props) => {
  const [modifying, setModifying] = useState<number | undefined>(undefined);
  const [modifyvalue, setmodifyValue] = useState<string>("");
  const [value, setValue] = useState("");

  const Delete = (id: number) => {
    question.subheadings.splice(id, 1);
    toggleView(id);
  };

  const Modify = (id: number) => {
    setmodifyValue(question.subheadings[id].toString());
    setModifying(id);
  };

  return (
    <div className="FAQ-header" key={id} id={question?._id.toString()}>
      <button
        id={"FAQ-button-" + id}
        aria-expanded={Aria_Hidden}
        style={{ display: "flex", flexDirection: "row" }}
        onClick={() => toggleView(id)}
      >
        <div className="FAQ-title">{question.heading}</div>
        <div className="icon" aria-hidden="true"></div>
      </button>
      <div className="FAQ-subheaders">
        {question?.subheadings.map((subheading, id: number) => {
          if (modifying == id)
            return (
              <p className="FAQ-subheader">
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
            );
          return (
            <div style={{ display: "flex" }}>
              <p key={id} className="FAQ-subheader">
                {subheading}
              </p>
              <button
                className="delete"
                onClick={() => {
                  Delete(id);
                }}
              >
                Delete
              </button>
              <button
                className="modify"
                onClick={() => {
                  Modify(id);
                }}
              >
                Modify
              </button>
            </div>
          );
        })}
        <p className="FAQ-subheader">
          <textarea
            placeholder="Type in an answer here to the above question and press enter"
            value={value}
            style={{
              width: "100%",
              height: "20vh",
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                question.subheadings.push(value);
                setValue("");
              }
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Header;
