import "./fechas-cronograma.css";
 interface FechasProps{
    dia:string,
    mes:string,
    titulo:string,
    descripcion:string,
    highlight:boolean // True ( fucsia )
  }
export default function FechasCronograma({dia, mes, titulo, descripcion, highlight}:FechasProps) {

  return (
    <div className="fecha">
      <div className={`fecha-cuadro ${highlight ? 'fecha-cuadro-fucsia':'fecha-cuadro-blanco'}`}>
        <p className={`fecha-dia ${highlight ? 'fecha-dia-fucsia':'fecha-dia-blanco'}`}>{dia}</p>
        <p className="fecha-mes">{mes}</p>
      </div>
      <div className="fecha-textos">
        <h3 className={`fecha-titulo ${highlight ? 'fecha-titulo-fucsia':'fecha-titulo-blanco'}`}>{titulo}</h3>
        <p className="fecha-descripcion">{descripcion}</p>
      </div>
    </div>
  );
}
