import data from "@/app/data/mision-data.json"
import CardsBeneficios from '@/app/ui/cards-beneficios'
import "./mision.css"
import Image from "next/image";
import { Plus, Users, TicketCheck, Tag } from 'lucide-react';

export default function Mision() {
    return (
        <>
            <div className="mision-wrapper contenedor-estandar">
                {/* COLUMNA IZQUIERDA */}
                <div className="mision-izquierda">
                    <div className="mision-header">
                        <Image src="/cohete.png" alt="cohete" width={118} height={114} className="cohete-img" />
                        <h1 className="fuente-titulos">Tu misión</h1>
                    </div>
                    <div className="texto-principal">
                        Construir un producto de software funcional y desplegado en producción en menos de 11 horas, usando IA como copiloto del desarrollo
                    </div>
                    <div className="tematica">
                        <Tag color="#2979FF" />
                        Temática: Se anunciará el mismo día
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className="mision-derecha">
                    <p className="subtitulos-plomos"> ACCESO </p>
                    <div className="accesos">
                        <div className="acceso-item">
                            <TicketCheck color="#A154F0" size={30}/>
                            <span>Entrada <strong>gratuita</strong></span>
                        </div>
                        <div className="acceso-item">
                            <Users color="#A154F0" size={30} />
                            <span>Abierto al <strong>público general</strong></span>
                        </div>
                        <div className="acceso-item">
                            <Plus color="#A154F0" size={30}/>
                            <span>11h de vibeCoding responsble</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contenedor-estandar">
                <p className="subtitulos-plomos llevas">TE LLEVAS</p>
                <div className="beneficios-container">
                    {data.beneficios.map((beneficio, index) => (
                        <CardsBeneficios
                            key={index}
                            icono={beneficio.icono}
                            titulo={beneficio.titulo}
                            descripcion={beneficio.descripcion}
                        />
                    ))}
                </div>
            </section>
            
        </>
    )
}