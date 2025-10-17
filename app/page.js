import Banner from "./components/Banner";
import Image from "next/image";

import jeep1 from "@/app/image/jeep1.jpeg";
import jeep2 from "@/app/image/jeep2.jpeg";
import jeep3 from "@/app/image/jeep3.jpeg";
import jeep4 from "@/app/image/jeep4.jpeg";
import jeep5 from "@/app/image/jeep5.jpeg";
import jeep6 from "@/app/image/jeep6.jpeg";

export default function Home() {
  return (
    <div className="pt-[80px]">
      <Banner />

      {/* GALERI */}
      <section className="max-w-6xl mx-auto px-5 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800">
          Our Gallery
        </h2>

        {/* Grid Gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[jeep1, jeep2, jeep3, jeep4, jeep5, jeep6].map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Jeep ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
