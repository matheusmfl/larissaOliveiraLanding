import { CircleWavyCheck } from "phosphor-react";
import "./style.css";

interface cardsProps {
  title1: string;
  strong: string;
  title2?: string;
}

export function Cards(props: cardsProps) {
  return (
    <div className="cards">
      <CircleWavyCheck />
      <span>
        {props.title1} <strong>{props.strong}</strong> {props.title2}
      </span>
    </div>
  );
}
