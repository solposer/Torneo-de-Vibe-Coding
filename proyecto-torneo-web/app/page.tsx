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
      <div id="inicio"><Hero /></div>
      <Sponsors />    
      <div id="mision"><Mision /></div>
      <div id="fechas"><Fechas /></div>
      <div id="requerimientos"><Requerimientos /></div>
      
      <div id="cronograma"><Cronograma /></div>
      <div id="criterios" className="seccion-criterios-fechas">
        <Criterios />
      </div>
      <div id="premios"><Premios /></div>
      
      <div id="faq"><PreguntasFrecuentesSection /></div>
      <Footer />
    </>
  );
}
