import { useState, createRef, useRef } from "react";
import { Question } from "../types/types";

type Props = {
  question: Question;
  id: number;
  Aria_Hidden: boolean;
  toggleView: (id: number) => void;
};

const Header = ({ question, id, Aria_Hidden, toggleView }: Props) => {
  const [value, setValue] = useState("");
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
          return (
            <p key={id} className="FAQ-subheader">
              {subheading}
            </p>
          );
        })}
        <p className="FAQ-subheader">
          <textarea
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
