import "../src/styles/global.css";
import { CardsSection } from "./components/CardsSection";
import { Header } from "./components/Header";

import { Section1 } from "./components/section1";

export function App() {
  return (
    <>
      <Header />
      <Section1 />
      <CardsSection />
    </>
  );
}
