import { PlayerCard } from "../../../components/playerCard";
import { Player } from "../../../interfaces/player";

interface Props {
  players: Player[];
  prompt: string;
}

export const Guessing = (props: Props) => {
  return (
    <>
      <span className="mb-20 px-40 text-gray-300 text-6xl">{props.prompt}</span>
      <div className="flex flex-row justify-center gap-16 flex-wrap">
        {props.players.map((player, index) => {
          return <PlayerCard key={`${player.name}-${index}`} player={player} />;
        })}
      </div>
    </>
  );
};
