import "./cards-beneficios.css";
import Image from "next/image";
interface BeneficiosProps{
  titulo:string,
  descripcion:string,
  icono:string,
}
export default function CardsBeneficios({ titulo, descripcion, icono }: BeneficiosProps) {
  return (
    <div className="card-beneficios">
      <div className="card-header">
        <Image src={icono} alt={titulo} height={50} width={50} className='card-icono' />
        <h3 className="subtitulo-beneficios fuente-subtitulos">{titulo}</h3>
      </div>
      <p className="descripcion-beneficios fuente-parrafos">{descripcion}</p>
    </div>
  );
}