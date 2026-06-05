
import data from "@/app/data/mision-data.json"
import CardsBeneficios from '@/app/ui/cards-beneficios'
import "./mision.css"
import Image from "next/image";

export default function Mision(){
    return(
        <>  <div className="mision-header">
                <Image 
                    src={"/cohete.png"}
                    alt={"cohete"}
                    width={118}
                    height={114}
                />
                <h1 className="fuente-titulos">Mision</h1>
            </div>
            {/*TODO: poner las mision y el acceso */}
            <div className="beneficios-container">
            {
                data.beneficios.map((beneficio, index) => {
                    return (
                    <CardsBeneficios
                        key={index}
                        icono={beneficio.icono}
                        titulo={beneficio.titulo}
                        descripcion={beneficio.descripcion}
                    />
                    );
                })
            }
            </div>
        </>        
    )
}