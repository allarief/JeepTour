"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import jeepLogo from "@/app/image/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-orange-700 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20 py-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src={jeepLogo}
            alt="Jeep Logo"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition">
            Jeep Tour
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <Link href="/paket" className="hover:text-yellow-300 transition">
              Paket
            </Link>
          </li>
          <li>
            <Link href="/galeri" className="hover:text-yellow-300 transition">
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/kontak" className="hover:text-yellow-300 transition">
              Kontak
            </Link>
          </li>
        </ul>

        {/* Tombol Login */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-white text-orange-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>

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
              <Link href="/paket" onClick={() => setOpen(false)}>
                Paket
              </Link>
            </li>
            <li>
              <Link href="/galeri" onClick={() => setOpen(false)}>
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/kontak" onClick={() => setOpen(false)}>
                Kontak
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="bg-white text-orange-700 px-4 py-2 rounded-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
