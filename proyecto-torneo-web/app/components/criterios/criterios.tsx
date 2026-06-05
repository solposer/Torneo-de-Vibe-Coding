import data from "@/app/data/cronograma-data.json"
import CardsCriterios from '@/app/ui/cards-criterios'
import "./criterios.css"
import Image from "next/image";

export default function Criterios(){
    return(
        <>  
            <div className="criterios-header">
                <Image 
                    src={"/critico.png"}
                    alt={"critico"}
                    width={104}
                    height={100}
                />
                <h1 className="fuente-titulos">Criterios de evaluacion</h1>
            </div>
            {/*TODO: poner las mision y el acceso */}
            <div className="criterios-container">
            {
                data.criterios.map((criterio, index) => {
                    return (
                    <CardsCriterios
                        key={index}
                        peso={criterio.porcentaje}
                        descripcion={criterio.descripcion}
                        numero={index +1 }
                    />
                    );
                })
            }
            </div>
        </>        
    )
}