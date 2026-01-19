"use client";
import { useEffect, useState } from "react";
import { BackgroundImage } from "../../components/backgroundImage";
import { prompts } from "./prompts";
import { Player } from "../../definitions/player";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firestore";
import {
  getPlayers,
  getSnapshotPlayers,
  updateGamePhase,
} from "../../firebase/firestore";
import { GameInitiating } from "../../components/gamePhases/host/gameInitiating";
import { PromptRevealed } from "../../components/gamePhases/host/promptRevealed";
import { Guessing } from "../../components/gamePhases/host/guessing";
import { GamePhase } from "../../definitions/gamePhase";

export function Host() {
  const [gamePhase, setGamePhase] = useState<GamePhase>("GameInitiating");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (gamePhase === "GameInitiating") {
      const getCurrentPlayers = async () => {
        setPlayers(await getPlayers());
      };
      getCurrentPlayers();
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
