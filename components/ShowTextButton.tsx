import { useState, ReactNode } from "react";
import styles from "./ShowTextButton.module.css";

export const ShowTextButton = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button onClick={() => setIsShown((isShown) => !isShown)}>
        {isShown ? "Hide" : "Show"} Text
      </button>
      {isShown && <p>Text that is normally hidden</p>}
    </div>
  );
};

interface ShowTextButtonProps {
  text: ReactNode;
  children: ReactNode;
}

export const ShowTextButton2 = ({ children }: ShowTextButtonProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button onClick={() => setIsShown((isShown) => !isShown)}>
        {isShown ? "Hide" : "Show"} Text
      </button>
      {isShown && children}
    </div>
  );
};

const Example = () => (
  <ShowTextButton2>
    <div>App inside of here</div>
  </ShowTextButton2>
);
