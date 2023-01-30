import { Cards } from "../cards";
import "./style.css";

export function CardsSection() {
  return (
    <section className="MainContainerPadding cardsSection">
      <h1>Esse workshop é para você que:</h1>

      <div className="divCardsContainer">
        <Cards
          title1="Para você que"
          strong=" nunca
está feliz"
          title2=" com os seus
resultados."
        />
        <Cards
          title1="Para você que não sabe "
          strong="identificar a necessidade
"
          title2="de cada pele."
        />
        <Cards
          title1="Para você que não
consegue realizar uma"
          strong="boa emoliência e extração."
        />
        <Cards
          title1="Para você que tem"
          strong="dificuldade em avaliação"
          title2="de pele."
        />
        <Cards
          title1="Para você que está
cansada de seguir"
          strong="protocolos engessados."
        />
        <Cards
          title1="Para você que quer atingir
um público que vai"
          strong="pagar
o valor justo pelo seu trabalho!"
        />
      </div>
    </section>
  );
}
