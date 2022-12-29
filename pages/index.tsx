import ShowTextButton from "@/components/showTextButton";
import { ChangeEvent, useState } from "react";

const ShowTextUncontrolled = ({
  someText,
  onClick,
  defaultIsShown = false,
}: {
  someText: string;
  buttonText: string;
  defaultIsShown?: boolean;
  onClick?: () => void;
}) => {
  const [isShown, setIsShown] = useState(defaultIsShown);

  return (
    <div>
      <button onClick={() => onClick?.()}>
        {isShown ? "Hide" : "Show"} Text
      </button>
      {isShown && <p>{someText}</p>}
    </div>
  );
};

const ShowTextControlled = ({
  someText,
  buttonText,
  isShown,
  onClick,
}: {
  someText: string;
  buttonText: string;
  isShown: boolean;
  onClick: () => void;
}) => {
  return (
    <div>
      <button onClick={onClick}>{buttonText}</button>
      {isShown && <p>{someText}</p>}
    </div>
  );
};

const useDisplayToggle = () => {
  const [isShown, setIsShown] = useState(false);

  const onToggle = () => {
    setIsShown((isShown) => !isShown);
  };

  return [isShown, onToggle] as const;
};

export default function Home() {
  const [isShown, onToggle] = useDisplayToggle();
  // const onChangeUncontrolled = (event: ChangeEvent<HTMLInputElement>) => {
  //   // we don't give a shit what happens in here
  // };

  // const [value, setValue] = useState("");
  // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  // const [isShown, setIsShown] = useState(false);
  // const onClick = () => {
  //   setIsShown((isShown) => !isShown);
  // };

  // const [value2, setValue2] = useState<string | undefined>(undefined)

  return (
    <div>
      <ShowTextButton />
    </div>
  );
}
