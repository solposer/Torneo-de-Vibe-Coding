import data from "@/app/data/fechas-preguntas-data.json"
import CardsFechas from '@/app/ui/fechas-cronograma'
import "./fechas.css"
import Image from "next/image";

export default function Fechas(){
    return(
        <>
            <div className="fechas-header contenedor-estandar">
                <Image 
                    src={"/calendario.png"}
                    alt={"calendario"}
                    width={104}
                    height={108}
                />
                <h1 className="fuente-titulos">Fechas importantes</h1>
            </div>
            <div className="fechas-container contenedor-estandar">
            {
                data.fechasImportantes.map((fecha,index)=>{
                    return(
                        <CardsFechas 
                            key={index}
                            dia={fecha.dia.split(" ")[0]}
                            mes={fecha.dia.split(" ")[1]}
                            titulo={fecha.titulo}
                            descripcion={fecha.descripcion}
                            highlight={fecha.importante}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}