"use client";

import Link from "next/link";
import Image from "next/image";
import Banner from "./components/Banner";

export default function Home() {
  const galleryImages = [
    "/image/jeep1.jpeg",
    "/image/jeep2.jpeg",
    "/image/jeep3.jpeg",
  ];

  return (
    <div className="pt-[96px] bg-[#fff7ed]">

      {/* ========================= HERO BANNER ========================= */}
      <Banner />

      {/* ========================= WHY CHOOSE ========================= */}
      <section className="py-24 bg-[#fff7ed]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Why Choose Our Jeep Tour?
        </h2>

        <p className="text-center text-gray-600 mx-auto max-w-xl mb-14">
          Nikmati petualangan off-road dengan Jeep tangguh, driver berpengalaman,
          dan panorama sunset yang memukau.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Armada Jeep Terawat",
              desc: "Jeep selalu dalam kondisi prima dan siap menjelajah medan ekstrem.",
            },
            {
              title: "Driver Profesional",
              desc: "Dipandu oleh driver lokal yang berpengalaman dan ramah.",
            },
            {
              title: "Pengalaman Tak Terlupakan",
              desc: "Setiap perjalanan dirancang untuk pengalaman adventure terbaik.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                p-8 rounded-2xl
                border border-orange-100
                shadow-sm hover:shadow-lg
                transition
              "
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= GALLERY ========================= */}
      <section className="py-24 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-14">
          Adventure Gallery
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="
                relative h-64
                rounded-2xl overflow-hidden
                shadow-sm hover:shadow-xl
                transition
              "
            >
              <Image
                src={img}
                alt={`Jeep Tour ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ========================= POPULAR ROUTES ========================= */}
      <section className="py-24 bg-[#fff7ed]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Popular Jeep Routes
        </h2>

        <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
          Rute favorit wisatawan dengan kombinasi medan ekstrem dan panorama sunset.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {[
            "Lava Tour Merapi",
            "Sunrise Jeep Adventure",
            "River Off-Road Experience",
            "Forest & Hill Track",
          ].map((route, index) => (
            <div
              key={index}
              className="
                bg-white
                p-6 rounded-2xl
                border border-orange-100
                shadow-sm hover:shadow-lg
                transition
              "
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {route}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jalur pilihan dengan spot foto dan sensasi adventure terbaik.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= TESTIMONIAL ========================= */}
      <section className="py-24 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-14">
          Apa Kata Wisatawan?
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {[
            {
              quote: "Pengalaman Jeep terbaik, sunset-nya luar biasa dan sangat seru!",
              name: "Dimas Pratama",
            },
            {
              quote: "Driver ramah, Jeep nyaman, rutenya mantap banget.",
              name: "Rina Lestari",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-[#fff7ed]
                p-8 rounded-2xl
                border border-orange-100
                shadow-sm
              "
            >
              <p className="italic text-gray-700 mb-4 leading-relaxed">
                “{item.quote}”
              </p>
              <h4 className="font-semibold text-gray-800">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="py-20 bg-orange-700 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Siap Menjelajah Bersama Jeep?
        </h2>

        <p className="text-orange-100 max-w-xl mx-auto mb-8">
          Pesan Jeep sekarang dan nikmati petualangan off-road dengan pengalaman terbaik.
        </p>

        <Link
          href="/booking"
          className="
            inline-block px-8 py-3 rounded-xl
            bg-white text-orange-700 font-semibold
            hover:bg-orange-100 transition
          "
        >
          Booking Sekarang
        </Link>
      </section>

    </div>
  );
}
