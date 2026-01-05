import { doc, collection, setDoc, getDocs } from "firebase/firestore";
import { db } from "./app";

interface setAnswerProps {
  playerName: string;
  playerNumber: string;
  answer: string;
}

export const setAnswer = async (props: setAnswerProps) => {
  const colRef = collection(db, "answers");
  await setDoc(doc(colRef, props.playerName), {
    number: props.playerNumber,
    answer: props.answer,
  });
};

interface getAnswersRes {
  number: string;
  answer: string;
}

export const getAnswers = async (): Promise<getAnswersRes[]> => {
  const querySnapshot = await getDocs(collection(db, "answers"));
  const docData: getAnswersRes[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      answer: data.answer,
      number: data.number,
    };
  });
  return docData;
};
