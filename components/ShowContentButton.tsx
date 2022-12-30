import { useState, ReactNode } from "react";
import styles from "./ShowContentButton.module.css";

interface ShowContentButtonProps {
  children: ReactNode;
}

export const ShowContentButton = ({ children }: ShowContentButtonProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.body}>
      <button
        className={styles.button}
        onClick={() => setIsShown((isShown) => !isShown)}
      >
        {isShown ? "Hide" : "Show"} Text
      </button>
      <div className={styles.text}>{isShown && children}</div>
    </div>
  );
};
