import { Dispatch, SetStateAction } from "react";
import { Player } from "../../../interfaces/player";
import { StateButton } from "../../../components/stateButton";

interface Props {
  players: Player[];
  setGamePhase: Dispatch<
    SetStateAction<"PromptRevealed" | "GameInitiating" | "Guessing">
  >;
}

export const GameInitiating = (props: Props) => {
  return (
    <>
      <span className="mb-20 px-40 text-gray-300 text-6xl">TOP 100</span>
      <div className="flex flex-col mb-10 gap-2 items-center">
        {props.players.map((player, index) => (
          <span className="text-gray-300 text-3xl" key={`${player}-${index}`}>
            {player.name}
          </span>
        ))}
      </div>
      <StateButton
        onClick={() => {
          props.setGamePhase("PromptRevealed");
        }}
        title="START GAME"
      />
    </>
  );
};
