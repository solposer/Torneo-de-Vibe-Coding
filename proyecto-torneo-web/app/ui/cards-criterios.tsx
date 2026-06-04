import "./cards-criterios.css" 
interface CriteriosProps{
  peso:string,
  descripcion:string,
  numero:number
}
export default function CardsCriterios({peso, descripcion, numero}:CriteriosProps) {
  return (
    <div className="card-criterios">
      <h3 className={`criterio-subtitulo fuente-subtitulos fuente-color-${numero}`}>{peso}</h3>
      <p className="criterio-descripcion fuente-parrafos">{descripcion}</p>
    </div>
  );
}
