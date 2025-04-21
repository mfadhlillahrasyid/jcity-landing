/* eslint-disable @next/next/no-img-element */
export const facilityLists = [
  {
    path: "./facility/Masjid.webp",
    title: "Masjid",
    desc: "Ibadah tetap lancar karena dekat dari rumah",
  },
  {
    path: "./facility/Kolam-Renang.webp",
    title: "Kolam Renang",
    desc: "Weekend santai bareng keluarga di rumah sendiri.",
  },
  {
    path: "./facility/bungalou.webp",
    title: "Area Ritel",
    desc: "Semua kebutuhan sehari-hari ada di dekat rumah",
  },
  {
    path: "./facility/Area-Jalan.webp",
    title: "Area Bermain",
    desc: "Bisa jogging, healing, atau main sama anak-anak",
  },
];

interface ListItem {
  path: string;
  title: string;
  desc: string;
}

export function List3({ items }: { items: ListItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div key={index} className="rounded-2xl overflow-hidden bg-amber-800">
          <img
            src={item.path}
            alt={`Fasilitas: ${item.title}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-white font-extrabold text-xl mb-1 tracking-tight">
              {item.title}
            </h3>
            <p className="text-white text-sm md:text-md">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
