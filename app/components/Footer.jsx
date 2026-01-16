import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Jeep Tour
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Pengalaman Jeep Tour terbaik di Kintamani dengan pemandu
            profesional dan rute petualangan terbaik.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Menu
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-400 transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-orange-400 transition">
                Paket Jeep
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-orange-400 transition">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:text-orange-400 transition">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Hubungi Kami
          </h4>
          <ul className="space-y-3 text-sm">
            <li>Kintamani, Bangli – Bali</li>
            <li>
              <Link
                href="https://wa.me/628XXXXXXXXX"
                target="_blank"
                className="hover:text-green-400 transition"
              >
                WhatsApp: +62 8xxx xxxx xxxx
              </Link>
            </li>
            <li className="text-gray-400">
              Buka setiap hari · 06.00 – 18.00
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Jeep Tour · All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
