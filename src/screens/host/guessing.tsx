import { Dispatch, SetStateAction, useState } from "react";
import { motion, Variants } from "framer-motion";
import { PlayerCard } from "../../components/playerCard";
import { StateButton } from "../../components/stateButton";
import { Player } from "../../definitions/player";
import { resetPlayers } from "../../firebase/firestore";

interface Props {
  players: Player[];
  prompt: string;
  setGamePhase: Dispatch<
    SetStateAction<"PromptRevealed" | "GameInitiating" | "Guessing">
  >;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Guessing = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const availablePlayers = props.players.filter((player) => player.answer);
  return (
    <>
      <span className="px-40 text-gray-300 text-6xl text-center">
        {props.prompt}
      </span>
      <motion.div
        className="relative flex flex-row justify-center gap-x-16 gap-y-8 flex-wrap mb-12 max-h-200 overflow-y-auto pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {availablePlayers.map((player, index) => {
          return <PlayerCard key={`${player.name}-${index}`} player={player} />;
        })}
      </motion.div>
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
