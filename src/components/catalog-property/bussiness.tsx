import Image from "next/image";
import { FaHome, FaBuilding } from "react-icons/fa";

interface PropertyItem {
  id: number;
  price: string;
  type: string;
  images: string[];
  lt: number;
  lb: number;
  status: string;
}

export function PropertyBussiness({ property }: { property: PropertyItem }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden mt-7 mb-12">
      <div className="relative w-full aspect-video h-[14rem]">
        <Image
          src={property.images[0]}
          alt={property.type}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 pb-6">
        <h3 className="text-md font-bold mt-7 text-gray-800">
          {property.type}
        </h3>
        <p className="text-2xl sm:text-3xl tracking-tight text-amber-600 font-extrabold">
          {property.price}
        </p>

        <div className="my-3">
          <span
            className={`px-3 py-2 text-sm font-bold rounded-lg ${
              property.status === "Unit Tersedia"
                ? "bg-green-600 text-white"
                : "bg-red-700 text-white"
            }`}
          >
            {property.status}
          </span>
        </div>

        <table className="w-full text-sm text-gray-700 mt-4">
          <tbody>
            <Row
              label={
                <span className="inline-flex items-center gap-2">
                  <FaHome /> Luas Tanah
                </span>
              }
              value={`${property.lt} m²`}
            />
            <Row
              label={
                <span className="inline-flex items-center gap-2">
                  <FaBuilding /> Luas Bangunan
                </span>
              }
              value={`${property.lb} m²`}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: React.ReactNode;
  value: string | number;
}) {
  return (
    <tr className="odd:bg-gray-100">
      <td className="py-2 px-4">{label}</td>
      <td className="py-2 px-4 text-right font-semibold text-amber-600">
        {value}
      </td>
    </tr>
  );
}
