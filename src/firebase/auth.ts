import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./app";

export async function Auth() {
  const auth = getAuth(app);

  const username = process.env.NEXT_PUBLIC_USERNAME || "";
  const password = process.env.NEXT_PUBLIC_PASSWORD || "";
  const result = await signInWithEmailAndPassword(auth, username, password)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return result;
}
