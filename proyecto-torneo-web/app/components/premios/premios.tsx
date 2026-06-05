import data from "@/app/data/premios-data.json"
import CardsPremios from '@/app/ui/cards-premios'
import "./premios.css"
import Image from "next/image";
export default function Premios(){
    return(
        <>  
            <div className="premios-header">
                <Image 
                src="/trofeo.png"
                alt="trofeo"
                width="104"
                height="122"
                />
                <h1 className="fuente-titulos">Premios</h1>
            </div>
            {/*TODO: poner las mision y el acceso */}
            <div className="premios-container">
            {
                data.map((premio, index) => {
                    return (
                    <CardsPremios
                        key={index}
                        titulo={premio.description}
                        nombre={premio.name}
                        puesto={index + 1}
                        icono={premio.icon}
                        badges={Object.values(premio.prize[0]).filter(v => v !== "")}
                    />
                    );
                })
            }
            </div>
        </>        
    )
}