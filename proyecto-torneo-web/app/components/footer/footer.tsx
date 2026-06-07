import "./footer.css"
import Image from "next/image";
import data from "@/app/data/redes-sociales.json"

export default function Footer() {
    return (
        <>
            <div className="container-colorido">
                <div className="footer-header">
                    <p className="fuente-parrafos autores">
                        DEVELOPER STUDENT CLUB PUCP
                    </p>
                    <div className="footer-pregunta">
                        <h1 className="fuente-subtitulos">Listo para </h1>
                        <h1 className="vibear">vibear?</h1>
                    </div>
                </div>
            </div>

            <div className="container-redes">
                <p>Siguenos para estar al tanto de las ultimas noticias:</p>
                <div className="redes-iconos">   {/* ← wrapper nuevo */}
                    {data.socialLinks.map((red, index) => (
                        <a key={index} href={red.url} target="_blank" rel="noopener noreferrer">
                            <Image
                                alt={red.name}
                                src={red.icon}
                                width={67}
                                height={67}
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className="container-creacion">
                <Image
                    src="/logo-torneo.png"
                    width={120}
                    height={90}
                    alt="logo-torneo"
                />
                <div className="textos-creacion">
                    <p className="fuente-subtitulos">Torneo de Vibe Coding 2026</p>
                    <p className="fuente-parrafos texto-club" >
                        Developer Student Club - PUCP
                    </p>
                </div>
            </div>
        </>
    )
}