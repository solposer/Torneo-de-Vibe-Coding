import "./cards-beneficios.css";
interface BeneficiosProps{
  titulo:string,
  descripcion:string,
  numero:number
}
export default function CardsBeneficios({titulo, descripcion}:BeneficiosProps) {
  return (
    <div className="card-beneficios">
      <h3 className="subtitulo-beneficios fuente-subtitulos ">{titulo}</h3>
      <p className="descripcion-beneficios fuente-parrafos">{descripcion}</p>
    </div>
  );
}
