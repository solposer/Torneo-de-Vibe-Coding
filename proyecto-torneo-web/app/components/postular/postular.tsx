import data from "@/app/data/data.json"
import "./postular.css"
export default function Requerimientos() {
  return (
    <div className="container-componente contenedor-estandar">
      <h1 className="fuente-titulos titulo-postular">¿Qué necesito para postular?</h1>
      <div>
        {data.toApply.map((requerimiento, index) => (
          <div className="container-requerimientos" key={index}>
            <div className="numero">{index + 1}</div>
            <div className="requerimiento">{requerimiento}</div>
          </div>
        ))}
      </div>
    </div>
  )
}