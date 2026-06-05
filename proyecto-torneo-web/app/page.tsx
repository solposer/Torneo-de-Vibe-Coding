import Criterios from './components/criterios/criterios';
import Hero from './components/hero/hero';
import Mision from './components/mision/mision';
import Premios from './components/premios/premios'
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
    </>
  );
}
