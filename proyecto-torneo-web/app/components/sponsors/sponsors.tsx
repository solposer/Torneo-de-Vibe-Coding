import data from "@/app/data/sponsors-data.json";
import Image from "next/image";
import "./sponsors.css"

export default function Sponsors() {
  return (
    <>
    <p className="subtitulos-plomos"> AUSPICIADO POR </p>
      <section className="overflow-hidden">
        <div className="slide-track">
          {[...data.sponsors, ...data.sponsors,...data.sponsors,...data.sponsors].map((sponsor, index) => (
           <Image
            key={index}
            src={sponsor.logo}
            alt={sponsor.name}
            width={160}
            height={40}
            style={{ objectFit: 'contain', width: '90%', height: 'auto' }}
          />
          ))}
        </div>
      </section>
    </>
  );
}