import { CardsSection2 } from "./cards";
import "./style.css";

export function SectionCard2() {
  return (
    <div className="sectionCard2Container">
      <h2>E você merece ainda mais...</h2>
      <div className="sectionCard2Cards">
        <CardsSection2
          text1="Bônus 1: "
          text2="Sorteio de Consultorias Profissionais
"
          text3="para você aperfeiçoar ainda mais a sua
técnica."
        />

        <CardsSection2
          text1="Aula Bônus 2: "
          text2="A importância da consulta 
ajuste home care "
          text3="para o sucesso dos
tratamentos faciais com Dayse Viana."
        />

        <CardsSection2
          text1="Bônus 2: "
          text2="Certificado digital, "
          text3="biblioteca de artigos,
sugestão de manipulação de cosméticos,
material de apoio e mais..."
        />

        <CardsSection2
          text1="Aula Bônus 3: "
          text2="Erros que você não pode cometer
durante um atendimento "
          text3="de limpeza de pele
com Stephanie Viana."
        />

        <CardsSection2
          text1="Aula Bônus 1: "
          text2="Estratégias de vendas, marketing
 e fidelização "
          text3="de pacientes na estética facial
 com Letícia Lourenço."
        />

        <CardsSection2
          text1="Aula Bônus 4: "
          text2="Como realizar uma
reestruturação cutânea "
          text3="em uma limpeza de pele com
Amanda Dantas."
        />
      </div>
    </div>
  );
}
