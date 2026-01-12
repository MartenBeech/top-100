"use client";

interface Props {
  disabled: boolean;
  onClick: () => void;
  fullLength?: boolean;
  submittedText?: string;
}

export const SubmitButton = (props: Props) => {
  return (
    <button
      className={`border rounded-lg p-1 bg-purple-600 cursor-pointer disabled:cursor-default text-2xl hover:opacity-75 ${
        props.fullLength ? "w-full" : "w-1/2"
      } ${
        props.submittedText ? "disabled:opacity-100" : "disabled:opacity-50"
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.submittedText || "SUBMIT"}
    </button>
  );
};
