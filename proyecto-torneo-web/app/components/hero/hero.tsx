import Boton from '@/app/ui/boton';
import CardsBeneficios from '@/app/ui/cards-beneficios';
import CardsCriterios from '@/app/ui/cards-criterios';
import CardsPremios from '@/app/ui/cards-premios';
import FechasCronograma from '@/app/ui/fechas-cronograma';

export default function Hero() {
    return (
        <>
            <Boton />
            <CardsBeneficios />
            <CardsPremios />
            <CardsCriterios />
            <FechasCronograma />
        </>
    )
}