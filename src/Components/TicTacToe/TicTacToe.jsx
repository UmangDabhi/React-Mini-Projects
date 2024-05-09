import React, { useRef, useState } from "react";
import circle_img from "../Assets/TicTacToe-Asset/circle.png";
import cross_img from "../Assets/TicTacToe-Asset/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let victoryRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let BoxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  let toggle = (e, num) => {
    if (lock || data[num] !== "") return;
    const currentPlayer = count % 2 === 0 ? "x" : "o";
    data[num] = currentPlayer;
    const imgSrc = currentPlayer === "x" ? cross_img : circle_img;
    e.target.innerHTML = `<img src=${imgSrc}>`;
    setCount(++count);
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "")
      win(data[2]);
    if (data[3] === data[4] && data[4] === data[5] && data[5] !== "")
      win(data[5]);
    if (data[6] === data[7] && data[7] === data[8] && data[8] !== "")
      win(data[8]);
    if (data[0] === data[3] && data[3] === data[6] && data[6] !== "")
      win(data[6]);
    if (data[1] === data[4] && data[4] === data[7] && data[7] !== "")
      win(data[7]);
    if (data[2] === data[5] && data[5] === data[8] && data[8] !== "")
      win(data[8]);
    if (data[0] === data[4] && data[4] === data[8] && data[8] !== "")
      win(data[8]);
    if (data[2] === data[4] && data[4] === data[6] && data[6] !== "")
      win(data[6]);
  };
  const win = (winner) => {
    setLock(true);
    const imgSrc = winner === "x" ? cross_img : circle_img;
    victoryRef.current.innerHTML = `Congratulations <img className="h-6 w-6" src=${imgSrc} /> won`;
  };
  const Reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    BoxArr.map((e) => {
      e.current.innerHTML = "";
    });
    victoryRef.current.innerHTML = "";
    setCount(0);
  };

  return (
    <div className="w-full flex flex-col items-center bg-blue-950 h-screen">
      <div className="text-cyan-100 text-5xl">Tic Tac Toe</div>
      <hr />
      <div className="grid grid-cols-3 gap-1">
        {BoxArr.map((boxRef, index) => (
          <div
            key={index}
            className="w-20 h-20 rounded-md bg-cyan-300 p-2 grid place-content-center"
            ref={boxRef}
            onClick={(e) => toggle(e, index)}
          ></div>
        ))}
      </div>
      <button
        className="p-2 px-3 text-2xl m-3 bg-cyan-200 rounded-xl"
        onClick={() => Reset()}
      >
        Reset
      </button>
      <h1 ref={victoryRef} className="m-4 flex text-2xl gap-4 text-white"></h1>

      <div id="VictoryText"></div>
    </div>
  );
};

export default TicTacToe;
