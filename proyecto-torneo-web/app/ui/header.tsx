import Image from 'next/image'
import Boton from './boton'
import "./header.css"

export default function Header()  {
    return(
        <header className="header">                         
            <Image className='logo' alt='logo del Torneo de Vibecoding' src='/logo-dsc.png'  width={98} height={70}/>                
            <Boton />
        </header>
    )
}
