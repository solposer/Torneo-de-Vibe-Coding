import Boton from '@/app/ui/boton';
import Image from 'next/image';

import "./hero.css";
import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
export default function Hero() {
    return (
        <>
            <header className="header">                         
                <Image className='logo' alt='logo del Torneo de Vibecoding' src='/logo-dsc.png'  width={98} height={70}/>                
                <Boton />
            </header>
            <main className="hero-main">
                <Image className='hero-image' alt='logo del Torneo de Vibecoding' src='/logo-torneo.png'  width={250} height={180}/>
                <section className="hero-content">
                    <article className="hero-left">
                        <div>                            
                            <h2 className='fuente-subtitulos text-torneo'>Torneo de</h2>
                            {/* Cambiar la fuente  */}
                            <h1 className='fuente-titulos text-vibecoding'><strong>Vibe Coding</strong></h1>
                        </div>           
                        {/*Acá estoy pensando cambiar el texto para que sea más corto por que no se ve tan bien con la fuente
                            Le cambio la fuente porque con la normal se ve que hay dmsdas fuetnes
                        */}             
                        <p className='fuente-subtitulos'>Ya est+as list@ para ganar grandes premios, construir proyectos con <strong>IA</strong> y hacer networking con personas de la <strong>industria</strong></p>
                    </article>
                    <article className="hero-right">
                        <Boton />
                        <p>Cierra el 15 de junio</p>
                        <Boton />
                    </article>
                </section>                
            </main>
            <section className="fechas-section">
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
                            <h4>9:00 - 20:00h</h4>                        
                        </div>                
                    </article>
                </div>
                <article className="card-lugar">                
                <MapPin />                
                <div className="info-lugar">
                    <h4>Nombre del lugar</h4>
                    <p>Descripción breve</p>
                </div>                
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                </a>
            </article>
            </section>                     
        </>
    )
}