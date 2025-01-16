import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section className="centered" style={{ marginBottom: "1rem" }}>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Accueil
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Retour d'information
      </Button>
      <Button
        isActive={active === "effect"}
        onClick={() => onChange("effect")}
      >
        Api user
      </Button>
    </section>
  );
}
