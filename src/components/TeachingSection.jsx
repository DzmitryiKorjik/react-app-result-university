import WayToTeach from "./WayToTeach";
import { ways } from "../data";
export default function TeachungSection() {
  return (
    <section>
      <h3>Notre approche de la formation</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
