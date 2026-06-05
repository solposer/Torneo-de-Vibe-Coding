import "./cards-premios.css";
import Image from "next/image";
interface PremioProps {
  titulo: string;
  nombre: string;
  badges: string[];
  puesto: number ;
  icono:string
}

export default function CardsPremios({titulo, nombre, badges, puesto,icono}:PremioProps) {
  return (
    <div className={`card-premios card-premios--${puesto}`}>
    <div className="premio-header">   {/* ← nuevo wrapper */}
        <Image
            src={icono}
            alt={titulo}
            height={103}
            width={85}
        />
        <div className="premio-titulo">
            <h3 className="premio-puesto fuente-subtitulos">{titulo}</h3>
            <p className={`premio-descripcion fuente-parrafos premio-descripcion--${puesto}`}>
                Premio {nombre}
            </p>
        </div>
    </div>
    <div className="premio-badges">
        {badges.map((badge, i) => (
            <div key={i} className={`premio-badge fuente-parrafos premio-badge--${puesto}`}>
                {badge}
            </div>
        ))}
    </div>
</div>
  );
}
