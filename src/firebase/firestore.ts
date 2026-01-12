import {
  doc,
  setDoc,
  updateDoc,
  DocumentData,
  DocumentSnapshot,
} from "firebase/firestore";
import { db } from "./app";
import { Player } from "../interfaces/player";

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

interface getPlayersProps {
  docSnap: DocumentSnapshot<DocumentData, DocumentData>;
}

export const getSnapshotPlayers = (props: getPlayersProps): Player[] => {
  const data = props.docSnap.data();
  if (data) {
    return Object.values(data).map((value) => JSON.parse(value));
  }
  return [];
};

export const resetPlayers = async () => {
  await setDoc(doc(db, "game", "players"), {});
};
