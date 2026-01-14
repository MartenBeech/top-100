import { Player } from "../../../definitions/player";
import { Dispatch, SetStateAction } from "react";
import { StateButton } from "../../../components/stateButton";

interface Props {
  players: Player[];
  setGamePhase: Dispatch<
    SetStateAction<"PromptRevealed" | "GameInitiating" | "Guessing">
  >;
  prompt: string;
}

export const PromptRevealed = (props: Props) => {
  const playersReady = props.players.filter((player) => player.answer);
  return (
    <>
      <span className="mb-40 px-40 text-gray-300 text-6xl">{props.prompt}</span>
      <div className="flex flex-col mb-10 gap-2 items-center">
        <span className="text-gray-300 text-3xl mb-6">PLAYERS READY:</span>
        {playersReady.map((player, index) => (
          <span className="text-gray-300 text-3xl" key={`${player}-${index}`}>
            {player.name}
          </span>
        ))}
      </div>
      <StateButton
        onClick={() => {
          props.setGamePhase("Guessing");
        }}
        title="ALL PLAYERS READY"
      />
    </>
  );
};
