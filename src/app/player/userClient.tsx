"use client";
import { useEffect, useState } from "react";
import { getSnapshotState } from "../../firebase/firestore";
import { BackgroundImage } from "../../components/backgroundImage";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firestore";
import { GamePhase } from "../../definitions/gamePhase";
import { GameInitiating } from "./gamePhases/gameInitiating";
import { Guessing } from "./gamePhases/guessing";
import { PromptRevealed } from "./gamePhases/promptRevealed";
import { Auth } from "../../firebase/auth";

export const User = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [name, setName] = useState("");
  const [gamePhase, setGamePhase] = useState<GamePhase>("GameInitiating");

  useEffect(() => {
    const login = async () => {
      setIsAuthorized(await Auth());
    };
    login();
  }, []);

  onSnapshot(doc(db, "game", "state"), (docSnap) => {
    setGamePhase(getSnapshotState({ docSnap }));
  });

  if (!isAuthorized) return <></>;

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
