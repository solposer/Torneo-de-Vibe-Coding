import "./footer.css"
import Image from "next/image";
import data from "@/app/data/redes-sociales.json"

export default function Footer() {
    return (
        <>
            <div className="container-colorido">
                <div className="footer-header">
                    <p className="fuente-parrafos">
                        DEVELOPER STUDENT CLUB PUCP
                    </p>
                    <div className="footer-pregunta" >
                        <h1 className="fuente-parrafos">Listo para </h1>
                        <h1 className="vibear">vibear?</h1>
                    </div>
                </div>
            </div>
            <p>Siguenos para estar al tanto de las ultimas noticias:</p>
            {
                data.socialLinks.map((red, index) => (  // ← .socialLinks, y () no {}
                        <a key={index} href={red.url} target="_blank" rel="noopener noreferrer" >       
                            <Image
                                alt={red.name}
                                src={red.icon}              // ← era red.icon, no red.link
                                width={67}
                                height={67}
                            />
                        </a>
                    ))
            }
            <div>
                <Image
                    src="/logo-torneo.png"
                    width={127}
                    height={127}
                    alt="logo-torneo"
                />
                <div className="container-creacion">
                    <p className="fuente-subtitulos">
                        Torneo de Vibe Coding 2026
                    </p>
                    <p className="fuente-parrafos">
                        Developer Student Club - PUCP
                    </p>
                </div>
            </div>
        </>
    )
}