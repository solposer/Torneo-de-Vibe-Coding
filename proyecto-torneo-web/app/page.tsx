import Criterios from './components/criterios/criterios';
import Hero from './components/hero/hero';
import Mision from './components/mision/mision';
import Premios from './components/premios/premios'
import Fechas from './components/fechas/fechas';
import Footer from './components/footer/footer'
import PreguntasFrecuentesSection from './components/preguntas/preguntas';
import Requerimientos from './components/postular/postular';
import Sponsors from './components/sponsors/sponsors'
import Cronograma from './components/cronograma/cronograma';
export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <Mision />
      { /*
      <FechasCronograma />
      */}
      <Requerimientos />
      <Premios />
      <Cronograma />
      <div className="seccion-criterios-fechas">
        <Criterios />
        <Fechas />
      </div>

      <PreguntasFrecuentesSection />
      <Footer />
    </>
  );
}
