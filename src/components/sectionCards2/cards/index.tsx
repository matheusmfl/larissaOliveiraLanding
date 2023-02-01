import checkCircle from "../../../assets/checkCircle.svg";
import "./style.css";

interface cardsProps {
  text1: string;
  text2: string;
  text3: string;
}

export function CardsSection2(props: cardsProps) {
  return (
    <div className="cardsSection2">
      <img src={checkCircle} alt="" />
      <div>
        <span>{props.text1}</span>
        <strong>{props.text2}</strong>
        <span>{props.text3}</span>
      </div>
    </div>
  );
}
