import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../input";
import { SubmitButton } from "../../submitButton";
import { setPlayer } from "../../../firebase/firestore";

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

export const GameInitiating = (props: Props) => {
  const [text, setText] = useState("");
  return (
    <>
      {props.name && (
        <span className="mb-16 text-gray-300 max-w-dvw overflow-clip text-2xl">
          {props.name}
        </span>
      )}
      <Input
        placeholder="Insert name..."
        setText={setText}
        text={text}
        disabled={!!props.name}
      />
      <SubmitButton
        disabled={!text || !!props.name}
        onClick={() => {
          setPlayer({ name: text });
          props.setName(text);
        }}
      />
    </>
  );
};
