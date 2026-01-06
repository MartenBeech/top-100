"use client";
import { useState } from "react";
import { StartButton } from "../../components/startButton";
import { BackgroundImage } from "../../components/backgroundImage";
import { PlayersReadyButton } from "../../components/PlayersReadyButton";
import { prompts } from "./prompts";
import { Player } from "../../interfaces/player";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/app";

export default function Host() {
  const [gamePhase, setGamePhase] = useState<
    "GameNotStarted" | "PromptRevealed" | "Guessing"
  >("GameNotStarted");
  const [players, setPlayers] = useState<Player[]>([]);

  onSnapshot(collection(db, "players"), (collection) => {
    setPlayers(
      collection.docs.map((doc) => {
        const data = doc.data();
        return {
          name: data.name,
          answer: data.answer,
          number: data.number,
        };
      })
    );
  });

  const playersReady = players.filter((player) => player.answer).length;

  return (
    <div className="flex flex-col items-center justify-center h-dvh">
      <BackgroundImage />
      {gamePhase === "GameNotStarted" && (
        <>
          <span className="mb-20 px-40 text-gray-300 text-6xl">TOP 100</span>
          <div className="flex flex-col mb-10 gap-2">
            {players.map((player, index) => (
              <span
                className="text-gray-300 text-2xl"
                key={`${player}-${index}`}
              >
                {player.name}
              </span>
            ))}
          </div>
          <StartButton
            onClick={() => {
              setGamePhase("PromptRevealed");
            }}
          />
        </>
      )}
      {gamePhase === "PromptRevealed" && (
        <>
          <span className="mb-80 px-40 text-gray-300 text-6xl">
            {prompts[0]}
          </span>
          <span className="text-gray-300 text-3xl mb-6">
            PLAYERS READY: {playersReady}
          </span>
          <PlayersReadyButton onClick={() => {}} />
        </>
      )}
    </div>
  );
}
