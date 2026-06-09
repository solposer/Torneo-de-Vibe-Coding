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
              width={200}
              height={111}
              className="h-16 w-auto"
            />
          ))}
        </div>
      </section>
    </>
  );
}