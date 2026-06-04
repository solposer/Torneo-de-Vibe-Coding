import "./cards-beneficios.css";
import Image from "next/image";
interface BeneficiosProps{
  titulo:string,
  descripcion:string,
  icono:string
}
export default function CardsBeneficios({titulo, descripcion, icono}:BeneficiosProps) {
  return (
    <div className="card-beneficios">
      <p>{icono}</p>
      {/* Idaelmente serián imágenes, se tendría que cambiar en el data el ícono por una url o algo así
      <Image src=''
        alt={titulo}
        height={40}/>    
      */}
      <h3 className="subtitulo-beneficios fuente-subtitulos ">{titulo}</h3>
      <p className="descripcion-beneficios fuente-parrafos">{descripcion}</p>
    </div>
  );
}
