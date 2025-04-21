import { JSX } from "react";
import {
  FaChartLine,
  FaHandHoldingHeart,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const whyLists = [
  {
    title: "Lokasi Premium",
    desc: "Mudah menjangkau akses tol, rumah sakit, sekolah, dan pusat perbelanjaan.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Akses Mudah",
    desc: "Menghubungkan kawasan Medan Johor dan Padang Bulan melalui jembatan The Jupiter.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Fasilitas Mumpuni",
    desc: "Fasilitas internal lengkap, tersedia mulai dari taman bermain anak, pusat kuliner, dan area bisnis.",
    icon: <FaHandHoldingHeart />,
  },
  {
    title: "Nilai Investasi Tinggi",
    desc: "Tingkat okupansi yang tinggi dan lokasi strategis, membuat nilai jual rumah terus meningkat.",
    icon: <FaChartLine />,
  },
];

interface ListItem {
  title: string;
  desc: string;
  icon: JSX.Element;
}

export function List2({ items }: { items: ListItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start space-x-3 bg-amber-50 p-4 rounded-xl leading-8"
        >
          <div className="bg-amber-600/80 text-white rounded-full text-2xl p-3 mt-1">
            {item.icon}
          </div>
          <div className="">
            <h3 className="text-amber-900 font-extrabold text-xl mb-1 tracking-tight">
              {item.title}
            </h3>
            <p className="text-neutral-700 leading-7">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
