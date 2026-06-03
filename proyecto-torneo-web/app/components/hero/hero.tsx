import Boton from '@/app/ui/boton';
import CardsBeneficios from '@/app/ui/cards-beneficios';
import CardsCriterios from '@/app/ui/cards-criterios';
import CardsPremios from '@/app/ui/cards-premios';
import FechasCronograma from '@/app/ui/fechas-cronograma';
import data from "@/app/data/data.json";

import "./hero.css";
import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
export default function Hero() {
    return (
        <>
            <header className="header">
                <div className='logo'>                    
                </div>
                <Boton />
            </header>
            <main className="hero-main">
                <div className="hero-image"></div>
                <section className="hero-content">
                    <article className="hero-left">
                        {/* Los estílos en línea se alpican para reiniciar los margin y padding*/}
                        <div>
                            <h2>Torneo de</h2>
                            <h1><strong>Vibe Coding</strong></h1>
                        </div>                        
                        <p>Ya est+as list@ para ganar grandes premios, construir proyectos con <strong>IA</strong> y hacer networking con personas de la <strong>industria</strong></p>
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
            <Boton />
            <CardsBeneficios />
            <CardsPremios />
            <CardsCriterios />
            <FechasCronograma />
        </>
    )
}