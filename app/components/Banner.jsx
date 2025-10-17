import React from "react";
import Image from "next/image";
import Link from "next/link";
import jeepBg from "@/app/image/banner3.jpeg"; // pastikan kamu punya gambar di app/image/

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10  mx-5 px-8">
      {/* Judul atas */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Selamat Datang di <span className="text-orange-500">Jeep Tour</span> 👋
      </h2>

      {/* Banner utama */}
      <div className="relative w-full max-w-10xl h-[280px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg">
        {/* Gambar background */}
        <Image
          src={jeepBg}
          alt="Jeep Adventure"
          fill
          className="object-cover brightness-75"
          priority
        />

        {/* Overlay teks */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Jeep Tour Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Jelajahi keindahan alam dan rasakan pengalaman off-road tak terlupakan bersama kami.
          </p>
          <Link
            href="/paket"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Lihat Paket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
