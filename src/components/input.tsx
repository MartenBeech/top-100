import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  placeholder: string;
  setText: Dispatch<SetStateAction<string>>;
  fullLength?: boolean;
  disabled?: boolean;
}

export const Input = (props: Props) => {
  return (
    <input
      value={props.text}
      placeholder={props.placeholder}
      className={`border rounded-lg mb-4 bg-gray-300 p-1 text-lg ${
        props.fullLength ? "w-full" : "w-2/3"
      }`}
      onChange={(e) => {
        props.setText(e.target.value);
      }}
      maxLength={30}
      disabled={props.disabled}
    />
  );
};
