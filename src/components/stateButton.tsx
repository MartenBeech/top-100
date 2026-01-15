interface Props {
  onClick: () => void;
  title: string;
  disabled?: boolean;
}

export const StateButton = (props: Props) => {
  return (
    <button
      className="border rounded-lg p-1 w-1/2 bg-purple-600 cursor-pointer text-2xl hover:opacity-75 disabled:cursor-default disabled:opacity-50"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};
