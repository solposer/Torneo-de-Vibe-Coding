import Image from 'next/image'
import Boton from './boton'
import "./header.css"

export default function Header()  {
    return(
        <header className="header">                        
            <a href="#inicio">
                <Image className='logo' alt='logo del Torneo de Vibecoding' src='/logo-dsc.png' width={98} height={70}/>                
            </a>
            
            {/* Opciones de navegación */}
            <nav className="header-nav">
                <a href="#mision">Misión</a>
                <a href="#requerimientos">Postular</a>
                <a href="#cronograma">Cronograma</a>
                <a href="#faq">FAQ</a>
            </nav>

            <Boton />
        </header>
    )
}