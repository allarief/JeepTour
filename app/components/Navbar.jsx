"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-orange-700 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20 py-6">

        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/image/logo.png"   // ✅ AMAN dari folder public
            alt="Jeep Logo"
            width={40}
            height={40}
            className="rounded-full object-contain"
            priority
          />
          <Link
            href="/"
            className="text-2xl font-bold hover:text-yellow-300 transition"
          >
            Jeep Tour
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <Link href="/booking" className="hover:text-yellow-300 transition">
              Paket
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-yellow-300 transition">
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="hover:text-yellow-300 transition">
              Kontak
            </Link>
          </li>
        </ul>

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-orange-700 border-t border-orange-600">
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/booking" onClick={() => setOpen(false)}>
                Paket
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setOpen(false)}>
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/kontak" onClick={() => setOpen(false)}>
                Kontak
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
