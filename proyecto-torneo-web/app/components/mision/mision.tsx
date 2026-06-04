
import data from "@/app/data/mision-data.json"
import CardsBeneficios from '@/app/ui/cards-beneficios'

export default function Mision(){
    return(
        <>
            <h1>Mision</h1>
            {/*TODO: poner las mision y el acceso */}
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
        </>        
    )
}