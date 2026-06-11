'use client';
import heroData from "@/app/data/hero-data.json";
import "./boton.css";

type TipoBoton = "primario" | "secundario";

interface BotonProps {
  tipo: TipoBoton;
  className?: String
}

export default function Boton({ tipo, className }: BotonProps) {
  const boton = heroData.botones.find(
    (boton) => boton.tipo === tipo
  );

  if (!boton) return null;

  return (
    <button
      className={`boton-${tipo} ${className}`}
      onClick={() => window.open(boton.link, "_blank", "noopener,noreferrer")}
    >
      {boton.texto}
    </button>
  );
}