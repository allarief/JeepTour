"use client";

import Link from "next/link";

export default function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.me/6283897920389"
      target="_blank"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white
        px-5 py-3 rounded-full
        shadow-xl
        flex items-center gap-2
        transition
      "
    >
      💬 WhatsApp
    </Link>
  );
}
