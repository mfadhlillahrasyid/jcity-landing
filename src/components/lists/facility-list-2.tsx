/* eslint-disable @next/next/no-img-element */

import { JSX } from "react";

export interface Item {
  id: number;
  desc: string;
  images: string[];
  icon: JSX.Element;
}

export function Facilities2({ facility }: { facility: Item }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mt-7 mb-12">
      <div className="relative w-full">
        <img
          src={facility.images[0]}
          alt={facility.desc}
          className="object-cover bg-white rounded-2xl"
        />

        {/* Badge di atas gambar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-xl shadow-md flex items-center justify-center gap-3 w-[90%] text-center">
          {/* Icon */}
          <div className="text-2xl text-neutral-600">{facility.icon}</div>
          {/* Desc */}
          <p className="text-gray-800 text-sm font-medium">{facility.desc}</p>
        </div>
      </div>
    </div>
  );
}
