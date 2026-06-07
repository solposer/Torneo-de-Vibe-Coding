import Criterios from './components/criterios/criterios';
import Hero from './components/hero/hero';
import Mision from './components/mision/mision';
import Premios from './components/premios/premios'
import Fechas from './components/fechas/fechas';
import Footer from './components/footer/footer'
import PreguntasFrecuentesSection from './components/preguntas/preguntas';
export default function Home() {
  return (
    <>
      <Hero />
      <Mision />
      { /*<CardsPremios />
      <CardsCriterios />
      <FechasCronograma />
      */}
      <Premios />
      <Criterios/>
      <Fechas/>
      <PreguntasFrecuentesSection/>
      <Footer />
    </>
  );
}
