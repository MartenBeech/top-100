"use client";
import { useEffect, useState } from "react";
import { BackgroundImage } from "../../components/backgroundImage";
import { prompts } from "./prompts";
import { Player } from "../../interfaces/player";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/app";
import { getSnapshotPlayers, resetPlayers } from "../../firebase/firestore";
import { GameInitiating } from "./gamePhases/gameInitiating";
import { PromptRevealed } from "./gamePhases/promptRevealed";
import { Guessing } from "./gamePhases/guessing";

export default function Host() {
  const [gamePhase, setGamePhase] = useState<
    "GameInitiating" | "PromptRevealed" | "Guessing"
  >("GameInitiating");
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    if (gamePhase === "PromptRevealed") {
      // setPlayers([]);
      // resetPlayers();
    }
  }, [gamePhase]);

  onSnapshot(doc(db, "game", "players"), (docSnap) => {
    setPlayers(getSnapshotPlayers({ docSnap }));
  });

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <BackgroundImage />
      {gamePhase === "GameInitiating" && (
        <GameInitiating players={players} setGamePhase={setGamePhase} />
      )}
      {gamePhase === "PromptRevealed" && (
        <PromptRevealed
          players={players}
          prompt={prompts[0]}
          setGamePhase={setGamePhase}
        />
      )}
      {gamePhase === "Guessing" && (
        <Guessing players={players} prompt={prompts[0]} />
      )}
    </div>
  );
}
