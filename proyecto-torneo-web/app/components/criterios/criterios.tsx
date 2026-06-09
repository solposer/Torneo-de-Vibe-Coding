import CardsCriterios from '@/app/ui/cards-criterios';
import { criterios } from '@/app/data/cronograma-data.json';
import Image from 'next/image';
import './criterios.css';

export default function Criterios() {
    return (
        <section className="container">
            <div className="criterios-header">
                <Image
                    src={"/critico.png"}
                    alt={"critico"}
                    width={104}
                    height={100}
                />
                <h1 className="fuente-titulos">Criterios de evaluacion</h1>
            </div>
            <div className="lista">
                {criterios.map((card, index) => (
                    <CardsCriterios
                        key={index}
                        peso={card.porcentaje}
                        descripcion={card.descripcion}
                        numero={index + 1}
                    />
                ))}
            </div>
        </section>
    );
}
