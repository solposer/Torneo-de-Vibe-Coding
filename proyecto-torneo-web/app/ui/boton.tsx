import heroData from "@/app/data/hero-data.json";
import "./boton.css";

type TipoBoton = "primario" | "secundario";

interface BotonProps {
  tipo: TipoBoton;
}

export default function Boton({ tipo }: BotonProps) {
  const boton = heroData.botones.find((b) => b.tipo === tipo);

  if (!boton) return null;

  return (
    <a
      href={boton.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`boton-${tipo}`}
    >
      {boton.texto}
    </a>
  );
}
