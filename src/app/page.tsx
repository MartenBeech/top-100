import { User } from "./userClient";

export default function Page() {
  const rnd = Math.random();
  const number = Math.ceil(rnd * 100);

  return <User number={number.toString()} />;
}
