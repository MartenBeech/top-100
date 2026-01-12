import { useState } from "react";
import { Player } from "../interfaces/player";
import { Input } from "./input";
import { SubmitButton } from "./submitButton";

interface Props {
  player: Player;
}

export const PlayerCard = (props: Props) => {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col bg-gray-300 w-60 p-3 rounded-xl border shadow-2xl">
      <span className="mb-8 h-40 text-xl wrap-break-word hyphens-auto">
        {props.player.answer}
      </span>
      <Input
        placeholder="number"
        text={text}
        setText={setText}
        fullLength
        disabled={submitted}
      />
      <SubmitButton
        disabled={!text.length || submitted}
        onClick={() => setSubmitted(true)}
        fullLength
        submittedText={submitted ? props.player.number : ""}
      />
    </div>
  );
};
