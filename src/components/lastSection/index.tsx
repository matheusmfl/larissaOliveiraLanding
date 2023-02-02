import { Button } from "../button";
import imgLastSection from "../../assets/imgLastSection.png";
import "./style.css";

export function LastSection() {
  return (
    <div className="lastSection">
      <div className="lastSectionImg" style={{ width: "50%" }}>
        <img src={imgLastSection} alt="" />
      </div>
      <div className="lastSectionText" style={{ paddingTop: "5%" }}>
        <h3>Se você leu até aqui, agora só tem três caminhos possíveis:</h3>

        <p>
          <strong>1.</strong> Não tomar nenhuma atitude e continuar com os
          resultados que você tem. Essa é a escolha mais fácil, mas não é a
          melhor.
        </p>

        <p>
          <strong>2.</strong> Tentar aprender e aplicar tudo sozinha. É um
          caminho possível, mas muito longo e difícil.
        </p>

        <p className="lastChild">
          <strong>3.</strong> Se tornar minha aluna e começar a ter resultados
          melhores e ter mais reconhecimento.
        </p>

        <Button title="Estou convencida e quero melhorar!" />
      </div>
    </div>
  );
}
