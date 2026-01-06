"use client";

interface Props {
  disabled: boolean;
  onClick: () => void;
}

export const SubmitButton = (props: Props) => {
  return (
    <button
      className="border rounded-lg p-1 w-1/2 bg-purple-600 disabled:opacity-50"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      SUBMIT
    </button>
  );
};
