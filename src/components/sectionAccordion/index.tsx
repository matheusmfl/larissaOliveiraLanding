import React, { useState } from "react";
import "./style.css";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const items = [
    {
      title: "Quanto tempo terei acesso?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "O Workshop será ao vivo?",
      content:
        "Aliquam euismod odio non mauris accumsan, in commodo nisi blandit.",
    },
    {
      title: "Qual a data do Workshop LPP?",
      content: "Proin placerat metus at erat laoreet, in facilisis sem tempor.",
    },
    {
      title: "Qual o público-alvo do LPP?",
      content: "Proin placerat metus at erat laoreet, in facilisis sem tempor.",
    },
    {
      title: "Preciso ter um computador?",
      content: "Proin placerat metus at erat laoreet, in facilisis sem tempor.",
    },
    {
      title: "Como será o suporte?",
      content: "Proin placerat metus at erat laoreet, in facilisis sem tempor.",
    },
    {
      title: "Quais são as formas de pagamento?",
      content: "Proin placerat metus at erat laoreet, in facilisis sem tempor.",
    },
  ];

  return (
    <div className="accordion">
      <h2>Dúvidas frequentes:</h2>
      {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => handleClick(index)}>
            {item.title}
            {/* {activeIndex === index ? "-" : "+"} */}
          </h3>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
