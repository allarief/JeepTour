"use client";

import Image from "next/image";
import Link from "next/link";
import { jeepPackages } from "@/app/data/jeepPackages";
import { notFound } from "next/navigation";

export default function PackageDetail({ params }) {
  const pkg = jeepPackages.find(
    (item) => item.id.toString() === params.id
  );

  if (!pkg) return notFound();

  return (
    <div className="pt-[96px] bg-[#fff7ed] min-h-screen">

      {/* IMAGE HEADER */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-10 left-6 md:left-20 text-white">
          <h1 className="text-4xl font-semibold">{pkg.name}</h1>
          <p className="text-orange-200 text-lg mt-2">{pkg.price}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-gray-700 text-lg mb-10 leading-relaxed">
          {pkg.description}
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Fasilitas Paket
        </h3>

        <ul className="space-y-3 mb-12">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex gap-3 text-gray-700">
              <span className="text-orange-600">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`https://wa.me/6283897920389?text=Halo,%20saya%20ingin%20booking%20${encodeURIComponent(
              pkg.name
            )}`}
            target="_blank"
            className="
              bg-orange-700 text-white
              px-8 py-3 rounded-xl
              font-semibold
              hover:bg-orange-800 transition
            "
          >
            Booking via WhatsApp
          </Link>

          <Link
            href="/booking"
            className="
              px-8 py-3 rounded-xl
              border border-gray-300
              text-gray-700
              hover:bg-gray-100 transition
            "
          >
            Kembali ke Paket
          </Link>
        </div>
      </section>
    </div>
  );
}
