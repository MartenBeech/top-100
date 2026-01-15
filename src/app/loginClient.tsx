"use client";
import { useRouter } from "next/navigation";
import { BackgroundImage } from "../components/backgroundImage";
import { StateButton } from "../components/stateButton";
import { Auth } from "../firebase/auth";
import { useState } from "react";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-40">
      <BackgroundImage />
      <StateButton
        title="Login as Player"
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await Auth().then((res) => {
            if (res) {
              router.push("/player");
            }
          });
        }}
      />
      <StateButton
        title="Login as Host"
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
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
