import './actividades-cronograma.css'

interface ActividadesProps {
  hora: string;
  subtitulo: string;
  descripcion?: string;
  variant?: 'red' | 'white';
}

export const ActividadesCronograma = ({ hora, subtitulo, descripcion, variant = 'white' }: ActividadesProps) => {
  const claseVariante = variant === 'red' ? 'variante-red' : 'variante-white';
  const claseSubtitulo = descripcion ? 'actividad-subtitulo-destacado' : 'actividad-subtitulo-normal';

  return (
    <div className={`actividad-item ${claseVariante}`}>
      <div className="actividad-header">
        <span className="actividad-punto"></span>
        <span className="actividad-hora">{hora}</span>
      </div>
      
      <h3 className={`actividad-subtitulo ${claseSubtitulo}`}>
        {subtitulo}
      </h3>
      {descripcion && (
        <p className="actividad-descripcion">
          {descripcion}
        </p>
      )}
    </div>
  );
};