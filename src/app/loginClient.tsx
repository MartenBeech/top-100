"use client";
import { useRouter } from "next/navigation";
import { BackgroundImage } from "../components/backgroundImage";
import { StateButton } from "../components/stateButton";
import { Auth } from "../firebase/auth";

export const Login = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-40">
      <BackgroundImage />
      <StateButton
        title="Login as Player"
        onClick={async () => {
          await Auth().then((res) => {
            if (res) {
              router.push("/player");
            }
          });
        }}
      />
      <StateButton
        title="Login as Host"
        onClick={async () => {
          await Auth().then((res) => {
            if (res) {
              router.push("/host");
            }
          });
        }}
      />
    </div>
  );
};
