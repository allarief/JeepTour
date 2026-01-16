"use client";

import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="pt-[96px] bg-[#fff7ed] min-h-screen relative">

      {/* ================= HEADER ================= */}
      <section className="py-20 text-center px-6 bg-gradient-to-b from-orange-100 to-[#fff7ed]">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Hubungi Kami
        </h1>
        <p className="max-w-xl mx-auto text-gray-600">
          Lokasi jelas, respon cepat, dan siap menemani petualangan Anda.
        </p>
      </section>

      {/* ================= INFO & CTA ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2">

        {/* INFO KONTAK */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Informasi Kontak
          </h3>

          <ul className="space-y-5 text-gray-700">
            <li>
              <span className="font-semibold block mb-1">WhatsApp</span>
              <Link
                href="https://wa.me/628XXXXXXXXX"
                target="_blank"
                className="text-orange-700 hover:underline"
              >
                +62 8xxx xxxx xxxx
              </Link>
            </li>

            <li>
              <span className="font-semibold block mb-1">Jam Operasional</span>
              Setiap hari · 06.00 – 18.00
            </li>

            <li>
              <span className="font-semibold block mb-1">Lokasi Basecamp</span>
              Kintamani, Bangli, Bali
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-orange-700 rounded-2xl p-8 text-white flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">
            Booking & Konsultasi
          </h3>

          <p className="text-orange-100 mb-8">
            Klik tombol di bawah untuk langsung terhubung dengan admin kami.
          </p>

          <Link
            href="https://wa.me/628XXXXXXXXX"
            target="_blank"
            className="text-center bg-white text-orange-700 py-3 rounded-xl font-semibold hover:bg-orange-100 transition"
          >
            Chat via WhatsApp
          </Link>
        </div>
      </section>

      {/* ================= REVIEW ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Review Pengunjung
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Rizky P.",
              text: "Jeep tour terbaik di Kintamani! Driver ramah dan view luar biasa.",
            },
            {
              name: "Sarah L.",
              text: "Sunrise-nya gila sih 😍 sangat worth it!",
            },
            {
              name: "Michael T.",
              text: "Lokasi mudah ditemukan, admin fast response.",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <div className="flex items-center mb-3">
                <span className="text-orange-500 text-lg">★★★★★</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                “{r.text}”
              </p>
              <span className="font-semibold text-gray-800 text-sm">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126352.9910583597!2d115.26259298874935!3d-8.249826193429104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1f46fa4effc21%3A0x4030bfbca7d2c20!2sKintamani%2C%20Bangli%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1768577557413!5m2!1sen!2sid"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* OPEN MAP BUTTON */}
        <div className="text-center mt-6">
          <Link
            href="https://www.google.com/maps?q=Kintamani,Bali"
            target="_blank"
            className="inline-block bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-800 transition"
          >
            📍 Buka di Google Maps
          </Link>
        </div>
      </section>

      {/* ================= STICKY MINI WA ================= */}
      <Link
        href="https://wa.me/628XXXXXXXXX"
        target="_blank"
        className="
          fixed bottom-6 right-6 z-50
          bg-green-500 text-white
          px-5 py-3 rounded-full
          shadow-lg
          text-sm font-semibold
          hover:bg-green-600 transition
        "
      >
        💬 WhatsApp
      </Link>

    </div>
  );
}
