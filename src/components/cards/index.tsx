import checkCircle from "../../assets/checkCircle.svg";
import "./style.css";

interface cardsProps {
  title1: string;
  strong: string;
  title2?: string;
}

export function Cards(props: cardsProps) {
  return (
    <div className="cards">
      <div className="imgCheckCircle">
        <img src={checkCircle} alt="" />
      </div>
      <span>
        {props.title1} <strong>{props.strong}</strong> {props.title2}
      </span>
    </div>
  );
}
