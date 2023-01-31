import "./style.css";
import aboutMeImg from "../../assets/aboutMeImg.png";

export function AboutMe() {
  return (
    <div className="aboutMeContainer">
      <img src={aboutMeImg} alt="   " />
      <div className="aboutMeTexts">
        <h1>Prazer, Larissa Oliveira</h1>
        <div>
          <p>
            Graduada em Estética e Cosmética pela UniBH, expert em Limpeza de
            Pele de Alta Performance, especialista em Personalização Cosmética
            Individualizada e Consulta Estética.
          </p>

          <p>
            Autora do Workshop LPP e Workshop CES – Consulta Estética de
            Sucesso. Conto com +300 alunas com foco em ajudá-las a
            personalizarem seus atendimentos, sempre priorizando a saúde da pele
            dos pacientes no longo prazo e entregando tratamentos de pele
            eficazes.
          </p>
        </div>
      </div>
    </div>
  );
}
