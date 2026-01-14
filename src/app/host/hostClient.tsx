"use client";
import { useEffect, useState } from "react";
import { BackgroundImage } from "../../components/backgroundImage";
import { prompts } from "./prompts";
import { Player } from "../../definitions/player";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/app";
import {
  getPlayers,
  getSnapshotPlayers,
  resetPlayers,
  updateGamePhase,
} from "../../firebase/firestore";
import { GameInitiating } from "./gamePhases/gameInitiating";
import { PromptRevealed } from "./gamePhases/promptRevealed";
import { Guessing } from "./gamePhases/guessing";
import { GamePhase } from "../../definitions/gamePhase";

export default function Host() {
  const [gamePhase, setGamePhase] = useState<GamePhase>("GameInitiating");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (gamePhase === "GameInitiating") {
      const getCurrentPlayers = async () => {
        setPlayers(await getPlayers());
      };
      getCurrentPlayers();
    }
    if (gamePhase === "PromptRevealed") {
      setPlayers([]);
      resetPlayers();
    }
    updateGamePhase({ gamePhase });
  }, [gamePhase]);

  onSnapshot(doc(db, "game", "players"), (docSnap) => {
    setPlayers(getSnapshotPlayers({ docSnap }));
  });

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <BackgroundImage />
      {gamePhase === "GameInitiating" ? (
        <GameInitiating players={players} setGamePhase={setGamePhase} />
      ) : gamePhase === "PromptRevealed" ? (
        <PromptRevealed
          players={players}
          prompt={prompts[0]}
          setGamePhase={setGamePhase}
        />
      ) : gamePhase === "Guessing" ? (
        <Guessing
          players={players}
          prompt={prompts[0]}
          setGamePhase={setGamePhase}
        />
      ) : (
        <span>error</span>
      )}
    </div>
  );
}
