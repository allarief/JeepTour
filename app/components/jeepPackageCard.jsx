"use client";
import Image from "next/image";

export default function JeepPackageCard({ pkg, selected, onSelect }) {
  return (
    <div
      className={`flex flex-col justify-between border rounded-2xl p-6 shadow-md transition hover:shadow-lg cursor-pointer bg-white ${
        selected === pkg.id
          ? "border-blue-600 ring-2 ring-blue-300"
          : "border-gray-200"
      }`}
      onClick={() => onSelect(pkg.id)}
    >
      {/* Bagian atas: gambar + info */}
      <div>
        {pkg.image && (
          <div className="mb-4">
            <Image
              src={pkg.image}
              alt={pkg.name}
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-48"
            />
          </div>
        )}
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
          {pkg.name}
        </h2>
        <p className="text-lg font-bold text-gray-800 mb-2">{pkg.price}</p>
        <p className="text-gray-600 mb-4">{pkg.description}</p>
        <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
          {pkg.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Bagian bawah: tombol selalu sejajar */}
      <button
        className={`w-full py-2 mt-4 rounded-lg font-semibold transition ${
          selected === pkg.id
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
        }`}
      >
        Pilih Paket
      </button>
    </div>
  );
}
