import { Player } from "../../../interfaces/player";
import { PlayersReadyButton } from "../../../components/playersReadyButton";
import { Dispatch, SetStateAction } from "react";

interface Props {
  players: Player[];
  prompt: string;
  setGamePhase: Dispatch<
    SetStateAction<"PromptRevealed" | "GameInitiating" | "Guessing">
  >;
}

export const PromptRevealed = (props: Props) => {
  const playersReady = props.players.filter((player) => player.answer);
  return (
    <>
      <span className="mb-80 px-40 text-gray-300 text-6xl">{props.prompt}</span>
      <div className="flex flex-col mb-10 gap-2">
        <span className="text-gray-300 text-3xl mb-6">PLAYERS READY:</span>
        {playersReady.map((player, index) => (
          <span className="text-gray-300 text-2xl" key={`${player}-${index}`}>
            {player.name}
          </span>
        ))}
      </div>
      <PlayersReadyButton
        onClick={() => {
          props.setGamePhase("Guessing");
        }}
      />
    </>
  );
};
