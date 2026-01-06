import {
  doc,
  collection,
  setDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./app";

interface setAnswerProps {
  playerName: string;
  playerNumber: string;
  answer: string;
}

export const setAnswer = async (props: setAnswerProps) => {
  const colRef = collection(db, "players");
  await setDoc(doc(colRef, props.playerName), {
    number: props.playerNumber,
    answer: props.answer,
    name: props.playerName,
  });
};

interface getAnswersRes {
  number: string;
  answer: string;
  name: string;
}

export const getAnswers = async (): Promise<getAnswersRes[]> => {
  const querySnapshot = await getDocs(collection(db, "players"));
  const docData: getAnswersRes[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      name: data.name,
      answer: data.answer,
      number: data.number,
    };
  });
  return docData;
};

interface setPlayerProps {
  playerName: string;
}

export const setPlayer = async (props: setPlayerProps) => {
  const colRef = collection(db, "players");
  await setDoc(doc(colRef, props.playerName), {
    number: "",
    answer: "",
    name: props.playerName,
  });
};

export const onPlayersChange = onSnapshot(
  collection(db, "players"),
  (collection) => {
    return collection.docs.map((doc) => {
      const data = doc.data();
      return {
        name: data.name,
        answer: data.answer,
        number: data.number,
      };
    });
  }
);
