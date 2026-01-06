"use client";
import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  placeholder: string;
  setText: Dispatch<SetStateAction<string>>;
}

export const Input = (props: Props) => {
  return (
    <input
      value={props.text}
      placeholder={props.placeholder}
      className="border rounded-lg w-2/3 mb-4 bg-gray-300 p-1"
      onChange={(e) => {
        props.setText(e.target.value);
      }}
      maxLength={30}
    />
  );
};
