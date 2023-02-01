import "./style.css";

export function StartToday() {
  return (
    <div className="startToday">
      <div className="comeceHoje">Comece hoje mesmo!</div>
      <h3>Quanto mais você investe em você, mais valor você tem:</h3>
      <span className="valueParcelado">Por apenas 12x de</span>
      <strong>
        <span>r$</span> 30,00
      </strong>
      <span>Ou 300$ à vista</span>

      <button>Quero garantir a minha vaga agora!</button>
      <span>Pagamento 100% seguro</span>
    </div>
  );
}
