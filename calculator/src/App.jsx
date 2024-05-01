import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";
function App() {
  const input = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];

  const [calVal, setCalVal] = useState("");
  const handleBtnClick = (num) => {
    //let newArr = [...displayItem, num];//[1,2,3]
    // let str = str + num.toString();
    // setDisplayItem(newArr);
    // console.log(`button clicked` + num);
    if (num === "C") {
      let newDisplayVal = "";
      setCalVal(newDisplayVal);
    } else if (num === "=") {
      let newDisplayVal = eval(calVal);
      setCalVal(newDisplayVal);
    } else {
      let newDisplayVal = calVal + num;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className="container">
      <div className="calcContainer">
        <div className="displayDiv">
          <Display displayItem={calVal}></Display>
        </div>
        <div className="buttonDiv">
          {input.map((item) => (
            <Button onBtnClick={() => handleBtnClick(item)} num={item}></Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
