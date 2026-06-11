import Image from 'next/image';
import data from '@/app/data/cronograma-data.json';
import { ActividadesCronograma } from '@/app/ui/actividades-cronograma';
import '@/app/components/cronograma/cronograma.css'

export default function Cronograma() {
  return (
    <div className="cronograma-wrapper">
      <div className="fechas-header contenedor-estandar">
        <Image
          src="/reloj-arena.png"
          alt="reloj de arena"
          width={104}
          height={108}
          style={{ width: 'clamp(56px, 8vw, 104px)', height: 'auto' }}
        />
        <h1 className="fuente-titulos">Cronograma</h1>
      </div>

      <div className="contenedor-estandar cronograma-fases-container">                
            {data.cronograma.map((actividad, index) => {
              const variantType =
                index % 3 === 0 || actividad.subtitulo.includes('Sprint')
                  ? 'red'
                  : 'white';
              return (
                <ActividadesCronograma
                  key={index}
                  hora={actividad.hora}
                  subtitulo={actividad.subtitulo}
                  variant={variantType}
                />
              );
            })}            
      </div>
    </div>
  );
}