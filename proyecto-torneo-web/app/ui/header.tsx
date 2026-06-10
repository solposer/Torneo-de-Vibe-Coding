import Image from 'next/image'
import Boton from './boton'
import "./header.css"

export default function Header()  {
    return(
        <header className="header">                        
            <a href="#inicio">
                <Image className='logo' alt='logo del Torneo de Vibecoding' src='/logo-dsc.png' width={98} height={70}/>                
            </a>
                        
            <nav className="header-nav">
                <a href="#">Inicio</a>
                <a href="#mision">Misión</a>
                <a href="#fechas">Fechas</a>
                <a href="#cronograma">Cronograma</a>
                <a href="#criterios">Rúbrica</a>
                <a href="#premios">Premios</a>
                <a href="#faq">FAQ</a>
            </nav>

            <Boton tipo="primario"/>
        </header>
    )
}