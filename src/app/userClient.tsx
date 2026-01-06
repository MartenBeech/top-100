"use client";
import { useState } from "react";
import backgroundImage from "../images/4867851.jpg";
import { setAnswer } from "../firebase/firestore";

interface Props {
  number: string;
}

export const User = (props: Props) => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <span className="mb-4 text-gray-300">YOUR MAGIC NUMBER IS</span>
      <span className="mb-28 text-9xl text-gray-300">{props.number}</span>
      <textarea
        value={text}
        placeholder="Fill me up with text..."
        className="border rounded-lg w-2/3 mb-4 h-20 bg-gray-300 p-1"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="border rounded-lg p-1 w-1/2 bg-purple-600 disabled:opacity-50"
        disabled={!text}
        onClick={() => {
          if (!text) return;
          setAnswer({
            answer: text,
            playerName: "Name",
            playerNumber: props.number,
          });
        }}
      >
        SUBMIT
      </button>
      <img
        className="absolute w-dvw h-dvh -z-10"
        src={backgroundImage.src}
        alt="bgImg"
      />
    </div>
  );
};
