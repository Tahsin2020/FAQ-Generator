import { useState } from "react";
import "./App.css";

function App() {
  var QA = [
    {
      Heading: "Why is the moon sometimes out during the day?",
      Subheading: [
        "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ012345679abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      ],
    },
    {
      Heading:
        "abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ012345679abcdef dzd asdas asd asd as dsa adsd as das dasghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      Subheading: [
        "abcdefghijklmnopqrst uvwxyzABCDEFGHIJKLM NOPQRSTUVWXYZ012345678 9abcdefghijklmnopqrstu vwxyzABCDEFGHIJKLMNOPQR STUVWXYZ0123456789",
      ],
    },
    {
      Heading:
        "asdasd asd as das asd as dasd asd as dasd asd as asdas asd as das das das ddas asdasd asd as das asd as dasd asd as dasd asd as asdas asd as das das das ddas",
      Subheading: [
        "abcdefghijklmnopqrst uvwxyzABCDEFGHIJKLM NOPQRSTUVWXYZ012345678 9abcdefghijklmnopqrstu vwxyzABCDEFGHIJKLMNOPQR STUVWXYZ0123456789",
      ],
    },
    {
      Heading: "ad asdasasd asd asd asd as ds",
      Subheading: [
        "abcdefghijklmnopqrst uvwxyzABCDEFGHIJKLM NOPQRSTUVWXYZ012345678 9abcdefghijklmnopqrstu vwxyzABCDEFGHIJKLMNOPQR STUVWXYZ0123456789",
        "abcdefghijklmnopqrst uvwxyzABCDEFGHIJKLM NOPQRSTUVWXYZ012345678 9abcdefghijklmnopqrstu vwxyzABCDEFGHIJKLMNOPQR STUVWXYZ0123456789",
        "abcdefghijklmnopqrst uvwxyzABCDEFGHIJKLM NOPQRSTUVWXYZ012345678 9abcdefghijklmnopqrstu vwxyzABCDEFGHIJKLMNOPQR STUVWXYZ0123456789",
      ],
    },
  ];
  var Aria_Hidden = [false];

  for (let i = 1; i < QA.length; i++) {
    Aria_Hidden.push(false);
  }

  const [Aria_Hidden_Array, setAria_Hidden_Array] = useState(Aria_Hidden);

  function toggleView(id: number) {
    for (let i = 0; i < QA.length; i++) {
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
        <div className="FAQ">
          {QA.map((item, id) => {
            return (
              <div className="FAQ-header" key={id}>
                <button
                  id={"FAQ-button-" + id}
                  aria-expanded={Aria_Hidden_Array[id]}
                  style={{ display: "flex", flexDirection: "row" }}
                  onClick={() => toggleView(id)}
                >
                  <div className="FAQ-title">{item.Heading}</div>
                  <div className="icon" aria-hidden="true"></div>
                </button>
                <div className="FAQ-subheaders">
                  {item.Subheading.map((item) => {
                    return <p className="FAQ-subheader"> {item}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
