import {
  doc,
  setDoc,
  updateDoc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "./app";
import { Player } from "../definitions/player";
import { GamePhase } from "../definitions/gamePhase";

interface setPlayerProps {
  name: string;
}

export const setPlayer = async (props: setPlayerProps) => {
  const player: Player = { answer: "", name: props.name, number: "" };

  await updateDoc(doc(db, "game", "players"), {
    [props.name]: JSON.stringify(player),
  });
};

export const updatePlayer = async (props: Player) => {
  const player: Player = { ...props };

  await updateDoc(doc(db, "game", "players"), {
    [props.name]: JSON.stringify(player),
  });
};

export const resetPlayers = async () => {
  await setDoc(doc(db, "game", "players"), {});
};

export const getPlayers = async (): Promise<Player[]> => {
  const docRef = doc(db, "game", "players");
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  if (data) {
    return Object.values(data).map((value) => JSON.parse(value));
  }
  return [];
};

interface updateGamePhaseProps {
  gamePhase: GamePhase;
}

export const updateGamePhase = async (props: updateGamePhaseProps) => {
  await updateDoc(doc(db, "game", "state"), {
    gamePhase: props.gamePhase,
  });
};

interface getSnapshotProps {
  docSnap: DocumentSnapshot<DocumentData, DocumentData>;
}

export const getSnapshotPlayers = (props: getSnapshotProps): Player[] => {
  const data = props.docSnap.data();
  if (data) {
    return Object.values(data).map((value) => JSON.parse(value));
  }
  return [];
};

export const getSnapshotState = (props: getSnapshotProps): GamePhase => {
  const data = props.docSnap.data();
  if (data) {
    return data.gamePhase;
  }
  return "GameInitiating";
};
