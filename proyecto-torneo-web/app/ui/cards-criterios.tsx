import "./cards-criterios.css"

interface CriteriosProps {
  peso: string,
  descripcion: string,
  numero: number
}

export default function CardsCriterios({ peso, descripcion, numero }: CriteriosProps) {
  const valor = parseInt(peso);

  return (
    <div className="card-criterios">
      <h3 className={`criterio-porcentaje fuente-subtitulos fuente-color-${numero}`}>{peso}</h3>
      <div className="criterio-info">
        <p className="criterio-descripcion fuente-parrafos">{descripcion}</p>
        <div className="barra-fondo">
          <div className={`barra-relleno barra-color-${numero}`} style={{ width: `${valor}%` }} />
        </div>
      </div>
    </div>
  );
}
