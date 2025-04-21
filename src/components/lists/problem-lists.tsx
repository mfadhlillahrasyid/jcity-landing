export const problemLists = [
  "Harga rumah makin naik, tapi kamu masih mikir-mikir?",
  "Mau nabung buat DP, tapi tabungan selalu bocor di tengah jalan?",
  "KPR makin sulit, tapi tabungan belum cukup?",
  "Sudah kerja keras, tapi rumah idaman masih jauh?",
];

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((text, index) => (
        <li
          key={index}
          className="flex items-start space-x-3 bg-red-50 p-4 rounded-xl leading-8"
        >
          <div className="bg-red-600/80 rounded-full p-2 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <div>
            <p className="text-neutral-700 leading-6 md:leading-8">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
