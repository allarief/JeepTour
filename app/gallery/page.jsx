"use client";

import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "/image/jeep1.jpeg",
    "/image/jeep2.jpeg",
    "/image/jeep3.jpeg",
    "/image/jeep4.jpeg",
    "/image/jeep5.jpeg",
    "/image/jeep6.jpeg",
  ];

  return (
    <div className="pt-[96px] bg-[#fff7ed] min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Adventure Gallery
        </h1>
        <p className="max-w-xl mx-auto text-gray-600">
          Dokumentasi perjalanan Jeep Tour penuh petualangan.
        </p>
      </section>

      {/* ================= MASONRY ================= */}
      <section className="pb-24 bg-white">
        <div
          className="
            max-w-6xl mx-auto px-3
            columns-2
            sm:columns-3
            lg:columns-4
            gap-3
          "
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="
                mb-3
                break-inside-avoid
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              <Image
                src={img}
                alt={`Jeep Tour ${i + 1}`}
                width={600}
                height={800}
                className="
                  w-full h-auto
                  object-cover
                  hover:scale-105
                  transition-transform duration-500
                "
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
