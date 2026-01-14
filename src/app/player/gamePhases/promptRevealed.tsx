import { useEffect, useState } from "react";
import { Textarea } from "../../../components/textarea";
import { SubmitButton } from "../../../components/submitButton";
import { updatePlayer } from "../../../firebase/firestore";

interface Props {
  name: string;
}

export const PromptRevealed = (props: Props) => {
  const [text, setText] = useState("");
  const [textSubmitted, setTextSubmitted] = useState(false);
  const [number, setNumber] = useState("");

  useEffect(() => {
    const rnd = Math.random();
    const randomNumber = Math.ceil(rnd * 100);
    setNumber(randomNumber.toString());
  }, []);

  return (
    <>
      <span className="mb-16 text-gray-300 max-w-dvw overflow-clip text-2xl">
        {props.name}
      </span>
      <span className="mb-4 text-gray-300 text-xl">YOUR MAGIC NUMBER IS</span>
      <span className="mb-28 text-9xl text-gray-300">{number}</span>
      <Textarea text={text} setText={setText} disabled={textSubmitted} />
      <SubmitButton
        disabled={!text || textSubmitted}
        onClick={() => {
          updatePlayer({
            answer: text,
            name: props.name,
            number: number,
          });
          setTextSubmitted(true);
        }}
      />
    </>
  );
};
