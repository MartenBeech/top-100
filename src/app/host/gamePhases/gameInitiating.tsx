import { Dispatch, SetStateAction } from "react";
import { StartButton } from "../../../components/startButton";
import { Player } from "../../../interfaces/player";

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
      <div className="flex flex-col mb-10 gap-2">
        {props.players.map((player, index) => (
          <span className="text-gray-300 text-2xl" key={`${player}-${index}`}>
            {player.name}
          </span>
        ))}
      </div>
      <StartButton
        onClick={() => {
          props.setGamePhase("Guessing");
        }}
      />
    </>
  );
};
