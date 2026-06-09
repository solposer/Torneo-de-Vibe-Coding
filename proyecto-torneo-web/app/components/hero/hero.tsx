import Boton from '@/app/ui/boton';
import Image from 'next/image';
import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import "./hero.css";
import data from '@/app/data/hero-data.json'

export default function Hero() {
    return (
        <>
            <main className="hero-main contenedor-estandar">
                <Image className='hero-image' alt='logo del Torneo de Vibecoding' src='/logo-torneo.png'  width={187} height={135}/>
                <section className="hero-content">  
                    <article className="hero-left">
                        <div>                            
                            <h2 className='fuente-subtitulos text-torneo'>Torneo de</h2>
                            {/* Cambiar color de la fuente  */}
                            <h1 className='fuente-torneo-vibe text-vibecoding'><strong>Vibe Coding</strong></h1>
                        </div>           
                        {/*Acá estoy pensando cambiar el texto para que sea más corto por que no se ve tan bien con la fuente
                            Le cambio la fuente porque con la normal se v   e que hay dmsdas fuetnes
                        */}             
                        <p className='fuente-subtitulos'                           
                        >Estás list@ para ganar grandes premios, construir proyectos con <strong>IA</strong> y hacer networking con personas de la <strong>industria</strong></p>
                    </article>
                    <article className="hero-right">
                        <Boton />
                        <p>Cierra el 15 de junio</p>
                        <Boton />
                    </article>
                </section>                
            </main>
            <section className="contenedor-estandar fechas-section">
                <div className="fechas-grupo">
                    <article className="caja-fecha">
                        <Calendar className="caja-fecha-icono" />
                        <div className="texto-fecha">
                            <h4>27 de junio</h4>
                            <p>sábado</p>
                        </div>                
                    </article>
                    <article className="caja-fecha">
                        <Clock className="caja-fecha-icono" />
                        <div className="texto-fecha">
                            <h4>9:00h - 20:00h</h4>                        
                        </div>                
                    </article>
                </div>
                <article className="card-lugar">                
                    <a href={data.lugar['link-ubicacion']} target="_blank" rel="noopener noreferrer" className="card-enlace">                
                        <MapPin />                
                        <div className="info-lugar">
                            <h4>{data.lugar.nombre}</h4>
                            <p>{data.lugar.avenida}</p>
                        </div>                
                        <ExternalLink />
                    </a>
                </article>
            </section>                     
        </>
    )
}