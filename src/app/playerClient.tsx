"use client";
import { useState } from "react";
import { getSnapshotState } from "../firebase/firestore";
import { BackgroundImage } from "../components/backgroundImage";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { GamePhase } from "../definitions/gamePhase";
import { GameInitiating } from "../screens/player/gameInitiating";
import { Guessing } from "../screens/player/guessing";
import { PromptRevealed } from "../screens/player/promptRevealed";

export const Player = () => {
  const [name, setName] = useState("");
  const [gamePhase, setGamePhase] = useState<GamePhase>("GameInitiating");

  onSnapshot(doc(db, "game", "state"), (docSnap) => {
    setGamePhase(getSnapshotState({ docSnap }));
  });

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <BackgroundImage />
      {gamePhase === "GameInitiating" || !name ? (
        <GameInitiating name={name} setName={setName} />
      ) : gamePhase === "PromptRevealed" ? (
        <PromptRevealed name={name} />
      ) : gamePhase === "Guessing" ? (
        <Guessing />
      ) : (
        <span>error</span>
      )}
    </div>
  );
};
