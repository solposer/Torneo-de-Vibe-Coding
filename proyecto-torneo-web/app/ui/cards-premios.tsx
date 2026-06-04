import "./cards-premios.css";
interface PremioProps {
  puesto: string;
  nombre: string;
  badges: string[];
  variante: "primero" | "segundo";
}

export default function CardsPremios({puesto, nombre, badges, variante}:PremioProps) {
  return (
    <div className={`card-premios card-premios--${variante}`}>
      <div className="premio-titulo">
        <h3 className="premio-puesto fuente-subtitulos">{puesto}</h3>
        <p className={`premio-descripcion fuente-parrafos premio-descripcion--${variante}`}>Premio {nombre}</p>
      </div>
      <div className="premio-badges">
        {badges.map((badge,i)=>(
          <div key={i} className={`premio-badge fuente-parrafos premio-badge--${variante}`}>
          {badge}
        </div>
        ))
        }
      </div>
    </div>
  );
}
