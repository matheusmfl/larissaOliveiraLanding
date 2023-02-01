import "../src/styles/global.css";
import { AboutMe } from "./components/aboutMe";
import { CardsSection } from "./components/CardsSection";
import { Header } from "./components/Header";

import { Section1 } from "./components/section1";
import { SectionCard2 } from "./components/sectionCards2";
import { SectionCarrossel } from "./components/sectionCarrossel";
import { SectionFeedback } from "./components/sectionFeedback";

export function App() {
  return (
    <>
      <Header />
      <Section1 />
      <CardsSection />
      <AboutMe />
      <SectionCarrossel />
      <SectionCard2 />
      <SectionFeedback />
    </>
  );
}
