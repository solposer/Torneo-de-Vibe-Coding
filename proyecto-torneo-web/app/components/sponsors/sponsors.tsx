import data from "@/app/data/sponsors-data.json";
import Image from "next/image";
import "./sponsors.css"

export default function Sponsors() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="slide-track">
          {[...data.sponsors, ...data.sponsors, ...data.sponsors, ...data.sponsors].map((sponsor, index) => (
            <Image
              key={index}
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={60}
              style={{
                objectFit: 'contain',
                width: 'clamp(100px, 20vw, 200px)',
                height: '60px'
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}