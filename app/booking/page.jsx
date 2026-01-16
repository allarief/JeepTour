"use client";

import Image from "next/image";
import Link from "next/link";
import { jeepPackages } from "@/app/data/jeepPackages";

export default function BookingPage() {
  return (
    <div className="pt-[96px] bg-[#fff7ed] min-h-screen">

      {/* ================= HERO IMAGE BANNER ================= */}
      <section className="relative h-[360px] md:h-[420px] w-full overflow-hidden">

        {/* Background Image */}
        <Image
          src="/image/paket.jpg" // 👉 ganti sesuai nama image kamu
          alt="Jeep Tour Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Paket Jeep Tour
            </h1>
            <p className="max-w-2xl mx-auto text-orange-100 text-lg">
              Nikmati pengalaman Jeep Tour terbaik dengan pilihan paket
              yang nyaman, aman, dan berkesan.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CARD LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {jeepPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="
                bg-white rounded-2xl
                border border-orange-100
                shadow-sm
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-300 ease-out
                flex flex-col
              "
            >
              {/* IMAGE */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {pkg.name}
                </h3>

                <p className="text-orange-700 font-semibold mb-3">
                  {pkg.price}
                </p>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {pkg.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD FOOTER */}
              <div className="px-6 pb-6 pt-4 border-t border-orange-100 flex gap-3">
                <Link
                  href={`/booking/${pkg.id}`}
                  className="
                    w-1/2 text-center py-3 rounded-xl
                    border border-orange-600
                    text-orange-700 font-semibold
                    hover:bg-orange-50 transition
                  "
                >
                  Detail
                </Link>

                <Link
                  href={`https://wa.me/6283897920389?text=Halo,%20saya%20ingin%20booking%20${encodeURIComponent(
                    pkg.name
                  )}`}
                  target="_blank"
                  className="
                    w-1/2 text-center py-3 rounded-xl
                    bg-orange-700 text-white font-semibold
                    hover:bg-orange-800 transition
                  "
                >
                  Booking
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CTA BOTTOM ================= */}
      <section className="py-20 bg-orange-700 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">
          Siap Berpetualang Bersama Kami?
        </h2>
        <p className="text-orange-100 max-w-xl mx-auto mb-8">
          Konsultasikan kebutuhan perjalanan Jeep Tour Anda sekarang juga.
        </p>

        <Link
          href="https://wa.me/6283897920389"
          target="_blank"
          className="
            inline-block px-8 py-3 rounded-xl
            bg-white text-orange-700 font-semibold
            hover:bg-orange-100 transition
          "
        >
          Hubungi via WhatsApp
        </Link>
      </section>
    </div>
  );
}
