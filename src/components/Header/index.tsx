import "./style.css";
import logo from "../../assets/LogoWorkshop.png";
import { Button } from "../button";
import heroImage from "../../assets/imgSection1.png";

export function Header() {
  return (
    <header className="MainContainerPadding">
      <div className="headerContainer">
        <div className="firstContainer">
          <img src={logo} alt="" className="logo" />

          <h1>
            Em apenas 4 horas eu vou te entregar os detalhes mais importantes
            que ninguém mais te fala sobre a técnica mais pedida nas clínicas de
            Estética.
          </h1>

          <Button title="Quero melhorar os meus resultados!" width="100%" />
          <span>Pagamento 100% seguro</span>
        </div>

        <div>
          <img src={heroImage} alt="" className="heroImg" />
        </div>
      </div>
    </header>
  );
}
