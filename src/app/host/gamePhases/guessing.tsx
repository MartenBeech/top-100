import { Dispatch, SetStateAction, useState } from "react";
import { PlayerCard } from "../../../components/playerCard";
import { StateButton } from "../../../components/stateButton";
import { Player } from "../../../definitions/player";
import { resetPlayers } from "../../../firebase/firestore";

interface Props {
  players: Player[];
  prompt: string;
  setGamePhase: Dispatch<
    SetStateAction<"PromptRevealed" | "GameInitiating" | "Guessing">
  >;
}

export const Guessing = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <span className="mb-12 px-40 text-gray-300 text-6xl text-center">
        {props.prompt}
      </span>
      <div className="flex flex-row justify-center gap-x-16 gap-y-8 flex-wrap mb-12 max-h-150 overflow-y-auto">
        {props.players.map((player, index) => {
          return <PlayerCard key={`${player.name}-${index}`} player={player} />;
        })}
      </div>
      <StateButton
        disabled={isLoading}
        onClick={() => {
          setIsLoading(true);
          resetPlayers().then(() => {
            props.setGamePhase("PromptRevealed");
          });
        }}
        title="NEXT ROUND"
      />
    </>
  );
};
