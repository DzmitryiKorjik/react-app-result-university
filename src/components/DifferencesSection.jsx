import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>Ce qui nous différencie des autres</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Approche
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Disponibilité
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Concentration
      </Button>

      {!contentType && <p>Appuyer sur le bouton</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
