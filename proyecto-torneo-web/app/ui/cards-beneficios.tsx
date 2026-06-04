import "./cards-beneficios.css";
import Image from "next/image";
interface BeneficiosProps{
  titulo:string,
  descripcion:string,
  icono:string,
}
export default function CardsBeneficios({titulo, descripcion, icono,}:BeneficiosProps) {
  return (
    <div className="card-beneficios">
      
      
      <Image src={icono}
        alt={titulo}
        height={40}
        width={40}
        />    
      
      <h3 className="subtitulo-beneficios fuente-subtitulos ">{titulo}</h3>
      <p className="descripcion-beneficios fuente-parrafos">{descripcion}</p>
    </div>
  );
}
