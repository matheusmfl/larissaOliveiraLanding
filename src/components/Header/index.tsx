import "./style.css";
import logo from "../../assets/LogoWorkshop.png";
import { Button } from "../button";
import heroImage from "../../assets/imgSection1.png";

export function Header() {
  return (
    <header>
      <div className="firstContainer">
        <img src={logo} alt="" className="logo" />

        <h1>
          Em apenas 4 horas eu vou te entregar os detalhes mais importantes que
          ninguém mais te fala sobre a técnica mais pedida nas clínicas de
          Estética.
        </h1>

        <Button />
        <span>Pagamento 100% seguro</span>
      </div>

      <div>
        <img src={heroImage} alt=""  />
      </div>
    </header>
  );
}
