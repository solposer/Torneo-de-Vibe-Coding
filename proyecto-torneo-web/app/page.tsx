import Criterios from './components/criterios/criterios';
import Hero from './components/hero/hero';
import Mision from './components/mision/mision';
import Premios from './components/premios/premios'
import Fechas from './components/fechas/fechas';
import Footer from './components/footer/footer'
import PreguntasFrecuentesSection from './components/preguntas/preguntas';
import Requerimientos from './components/postular/postular';
export default function Home() {
  return (
    <>
      <Hero />
      <Mision />
      { /*<CardsPremios />
      <CardsCriterios />
      <FechasCronograma />
      */}
      <Requerimientos/>
      <Premios />
      <Criterios/>
      <Fechas/>
      <PreguntasFrecuentesSection/>
      <Footer />
    </>
  );
}
