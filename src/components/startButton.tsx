"use client";

interface Props {
  onClick: () => void;
}

export const StartButton = (props: Props) => {
  return (
    <button
      className="border rounded-lg p-1 w-1/2 bg-purple-600 cursor-pointer text-2xl hover:opacity-75"
      onClick={props.onClick}
    >
      START GAME
    </button>
  );
};
