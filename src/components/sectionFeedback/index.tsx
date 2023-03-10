import feedback1 from "../../assets/feedback1.png";
import feedback2 from "../../assets/feedback2.png";
import feedback3 from "../../assets/feedback3.png";
import feedback4 from "../../assets/feedback4.png";
import "./style.css";

export function SectionFeedback() {
  return (
    <section className="feedbackContainer">
      <h2 style={{ maxWidth: "100%" }}>
        Feedback de quem já participou do nosso evento!
      </h2>

      <div
        className="feedback1"
        style={{ display: "flex", gap: "19px", flexWrap: "wrap" }}
      >
        <img
          src={feedback1}
          alt=""
          style={{ maxWidth: "332px", maxHeight: "457px" }}
        />
        <div
          className="div2img"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10%",
          }}
        >
          <img
            className="feedback2"
            src={feedback2}
            alt=""
            style={{ maxWidth: "342px", maxHeight: "128px" }}
          />
          <img
            className="feedback3"
            src={feedback3}
            alt=""
            style={{ maxWidth: "342px", maxHeight: "273px" }}
          />
        </div>
        <img
          className="feedback4"
          src={feedback4}
          alt=""
          style={{ maxWidth: "250px", maxHeight: "457px" }}
        />
      </div>
    </section>
  );
}
