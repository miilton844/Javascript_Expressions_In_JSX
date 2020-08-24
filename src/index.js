import React from "react";
import ReactDOM from "react-dom";

const fname = "Milton";
const lname = "Lerner";
const luckyNumber = 7;
function randomNumber() {
  return Math.random() * 10 + 1;
}
ReactDOM.render(<h1>Hello {name}</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>Hello my name is {fname + " " + lname}</h1>
    <h1>
      Hello my name is {fname} {lname}
    </h1>
    {/* <h1>Hello my name is {"${fname} ${lname}"}</h1> */}

    <p>
      Your lucky number is
      {randomNumber() + luckyNumber}
    </p>
  </div>,
  document.getElementById("root2")
);
