"use client";
import { useState } from "react";
import { setAnswer, setPlayer } from "../firebase/firestore";
import { Textarea } from "../components/textarea";
import { SubmitButton } from "../components/submitButton";
import { Input } from "../components/textField";
import { BackgroundImage } from "../components/backgroundImage";

interface Props {
  number: string;
}

export const User = (props: Props) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <BackgroundImage />
      {!nameSubmitted && (
        <>
          <Input placeholder="Insert name..." setText={setName} text={name} />
          <SubmitButton
            disabled={!name}
            onClick={() => {
              setPlayer({ playerName: name }).then(() => {
                setNameSubmitted(true);
              });
            }}
          />
        </>
      )}
      {nameSubmitted && (
        <>
          <span className="mb-16 text-gray-300 max-w-dvw overflow-clip">
            {name}
          </span>
          <span className="mb-4 text-gray-300">YOUR MAGIC NUMBER IS</span>
          <span className="mb-28 text-9xl text-gray-300">{props.number}</span>
          <Textarea text={text} setText={setText} />
          <SubmitButton
            disabled={!text}
            onClick={() => {
              if (!text) return;
              setAnswer({
                answer: text,
                playerName: name,
                playerNumber: props.number,
              });
            }}
          />
        </>
      )}
    </div>
  );
};
