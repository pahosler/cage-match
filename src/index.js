import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Timer from "maketimer";

import "./styles.css";

const timer = new Timer();
const cardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const cage = [
  require("./images/cage1.jpg"),
  require("./images/cage2.jpg"),
  require("./images/cage3.jpg"),
  require("./images/cage4.jpg"),
  require("./images/cage5.jpg"),
  require("./images/cage6.jpg")
];

// two second timer
const twoSeconds = func => timer.start(2000, func);

function App() {
  const [select, setSelect] = useState(0);
  const [toggle, setToggle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const handleFlip = e => {
    let index = e.target.id;
    let _select = select;
    toggle[index] = !toggle[index];

    if (_select < 2) {
      _select = select + 1;
      console.log(_select);
      setToggle(toggle);
      setSelect(_select);
    } else {
      // setSelect(3);
    }
  };

  useEffect(toggle => {
    if (select === 2) {
      twoSeconds(() => {
        toggle = [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
        ];
        setToggle(toggle);
        setSelect(0);
        timer.stop();
        // return;
      });
    }
  });
  return (
    <div className="App">
      <h1>Cage Match </h1>
      <div className="cards">
        {cardArr.map(index => (
          <div
            key={index}
            className={`flip-container ${
              toggle[index] && select <= 2 && toggle[index] !== false
                ? "flip"
                : ""
            }`}
            onClick={select <= 2 && toggle[index] !== true ? handleFlip : null}>
            <div className="flipper">
              <img
                className="cardBack"
                id={index}
                name={index}
                src={cage[index % 6]}
              />
              <div className="cardFront" id={index} name={index}>
                <b>
                  <i id={index}>Cage Match</i>
                </b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
