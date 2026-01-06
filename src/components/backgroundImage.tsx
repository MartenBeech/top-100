import backgroundImage from "../images/backgroundImage.jpg";

export const BackgroundImage = () => {
  return (
    <img
      className="absolute w-dvw h-dvh -z-1"
      src={backgroundImage.src}
      alt="bgImg"
    />
  );
};
