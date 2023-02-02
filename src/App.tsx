import "../src/styles/global.css";
import { AboutMe } from "./components/aboutMe";
import { CardsSection } from "./components/CardsSection";
import { Footer } from "./components/footer";
import { Header } from "./components/Header";
import { LastSection } from "./components/lastSection";

import { Section1 } from "./components/section1";
import Accordion from "./components/sectionAccordion";
import { SectionCard2 } from "./components/sectionCards2";
import { SectionCarrossel } from "./components/sectionCarrossel";
import { SectionFeedback } from "./components/sectionFeedback";
import { StartToday } from "./components/startToday";

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
      <StartToday />
      <LastSection />
      <Accordion />
      <Footer />
    </>
  );
}
