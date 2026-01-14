import { Dispatch, SetStateAction } from "react";
import { PlayerCard } from "../../../components/playerCard";
import { StateButton } from "../../../components/stateButton";
import { Player } from "../../../definitions/player";

interface Props {
  players: Player[];
  setGamePhase: Dispatch<
    SetStateAction<"PromptRevealed" | "GameInitiating" | "Guessing">
  >;
  prompt: string;
}

export const Guessing = (props: Props) => {
  return (
    <>
      <span className="mb-12 px-40 text-gray-300 text-6xl">{props.prompt}</span>
      <div className="flex flex-row justify-center gap-16 flex-wrap mb-12">
        {props.players.map((player, index) => {
          return <PlayerCard key={`${player.name}-${index}`} player={player} />;
        })}
      </div>
      <StateButton
        onClick={() => {
          props.setGamePhase("PromptRevealed");
        }}
        title="NEXT ROUND"
      />
    </>
  );
};
