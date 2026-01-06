"use client";
import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const Textarea = (props: Props) => {
  return (
    <textarea
      value={props.text}
      placeholder="Fill me up with text..."
      className="border rounded-lg w-2/3 mb-4 h-20 bg-gray-300 p-1"
      onChange={(e) => {
        props.setText(e.target.value);
      }}
    />
  );
};
