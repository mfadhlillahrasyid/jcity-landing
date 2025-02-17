// Swiper
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// Facilities Items
const testimonials = [
  {
    path: `${window.location.origin}/jcity-landing/public/facility/Masjid.webp`,
    title: "Masjid",
    subtitle: "Ibadah Tetap lancar karena Dekat dari rumah",
  },
  {
    path: `${window.location.origin}/jcity-landing/public/facility/Kolam-Renang.webp`,
    title: "Kolam Renang",
    subtitle: "Weekend santai bareng keluarga di rumah sendiri.",
  },
  {
    path: `${window.location.origin}/jcity-landing/public/facility/bungalou.webp`,
    title: "Area Ritel",
    subtitle: "Semua kebutuhan sehari-hari ada di dekat rumah.",
  },
  {
    path: `${window.location.origin}/jcity-landing/public/facility/Area-Jalan.webp`,
    title: "Area Bermain",
    subtitle: "Bisa jogging, healing, atau main sama anak-anak.",
  },
];

const swiperWrapper = document.getElementById("swiper-wrapper");

testimonials.forEach((testimonial) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
        <div class="rounded-2xl">
            <img src="${testimonial.path}" alt="Fasilitas Jcity" class="w-auto rounded-t-xl rounded-b-xl">
            <div class="justify-center mt-4">
                <h3 class="text-white font-extrabold text-2xl mb-1 tracking-tight">${testimonial.title}</h3>
                <p class="text-white text-sm md:text-md">${testimonial.subtitle}</p>
            </div>
        </div>
  `;
  swiperWrapper.appendChild(slide);
});

// Properties Item
const properties = [
  {
    id: 1,
    type: "J-Paradise L. 6m",
    price: "Rp 1,64 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/j-paradise-maket.webp`],
    lt: 72,
    lb: 110,
    kt: 3,
    km: 3,
    carport: 1,
    status: "Unit Available",
  },
  {
    id: 2,
    type: "J-Paradise L. 8m",
    price: "Rp 2,8 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/j-paradise-maket-2.webp`],
    lt: 112,
    lb: 175,
    kt: 4,
    km: 3,
    carport: 2,
    status: "Sold Out",
  },
  {
    id: 3,
    type: "Vienna",
    price: "Rp 1,44 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-Vienna-Type-6-depan-300x200.webp`],
    lt: 90,
    lb: 72,
    kt: 2,
    km: 2,
    carport: 1,
    status: "Unit Available",
  },
  {
    id: 4,
    type: "Vienna Elite",
    price: "Rp 1,59 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-Vienna-Type-6-depan-1-300x200.webp`],
    lt: 90,
    lb: 97,
    kt: 3,
    km: 3,
    carport: 2,
    status: "Unit Available",
  },
  {
    id: 5,
    type: "J-Elite V",
    price: "Rp 1,81 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-J.-Elite-Type-V-depan-300x200.webp`],
    lt: 84,
    lb: 112,
    kt: 3,
    km: 3,
    carport: 1,
    status: "Unit Available",
  },
  {
    id: 6,
    type: "J-Crown Type Jade",
    price: "Rp 3,02 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-J.-Crown-depan-300x200.webp`],
    lt: 128,
    lb: 175,
    kt: 4,
    km: 3,
    carport: 2,
    status: "Sold Out",
  },
];

const propertyList = document.getElementById("property-list");

properties.forEach((property) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add(
    "swiper-slide",
    "bg-white",
    "my-10",
    "shadow-2xl",
    "rounded-2xl",
  );

  swiperSlide.innerHTML = `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${property.images
          .map(
            (img) => `
          <div class="swiper-slide">
            <img src="${img}" alt="${property.type}" class="w-full h-full object-cover bg-white rounded-t-2xl">
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="px-6 pb-6">
          <h3 class="text-2xl font-extrabold mt-7 text-gray-800">${property.type}</h3>
    <p class="text-4xl tracking-tight text-amber-600 font-extrabold">${
      property.price
    }</p>

    <div class="mt-5 mb-2">
      <span class="px-3 py-2 text-sm font-bold rounded-lg ${
        property.status === "Unit Available"
          ? "bg-green-600 text-white"
          : "bg-red-700 text-white"
      }">
        ${property.status}
      </span>
    </div>

    <div class="overflow-x-auto">
      <table
            class="w-full border-collapse text-sm text-gray-700 mt-4 bg-white rounded-lg shadow-md overflow-hidden">
            <tbody>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🏡 Luas Tanah</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-lt">${property.lt}</span> m²
                </td>
              </tr>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🏗 Luas Bangunan</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-lb">${property.lb}</span> m²
                </td>
              </tr>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🛏 Kamar Tidur</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-kt">${property.kt}</span>
                </td>
              </tr>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🚿 Kamar Mandi</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-km">${property.km}</span>
                </td>
              </tr>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🚗 Carport</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-carport">${property.carport}</span>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
    </div>
  `;

  propertyList.appendChild(swiperSlide);
});

// Properties Bussiness
const propertiesBussiness = [
  {
    id: 1,
    type: "J-Square",
    price: "Rp 2,44 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-J.-Square-depan-300x200.webp`],
    lt: 64,
    lb: 192,
    status: "Sold Out",
  },
  {
    id: 2,
    type: "J-Point A",
    price: "Rp 2,55 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-J.-Point-Type-A-depan-300x200.webp`],
    lt: 72,
    lb: 246,
    status: "Unit Available",
  },
  {
    id: 3,
    type: "J-Point B",
    price: "Rp 3,09 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-J.-Point-Type-B-depan-1-300x200.webp`],
    lt: 87,
    lb: 298,
    status: "Unit Available",
  },
  {
    id: 3,
    type: "J-Line",
    price: "Rp 5,17 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/1.-J.-Line-depan-300x200.webp`],
    lt: 144,
    lb: 504,
    status: "Unit Available",
  },
  {
    id: 4,
    type: "Cemara Bussiness Point",
    price: "Rp 1,7 Miliar",
    images: [`${window.location.origin}/jcity-landing/public/type/img3-300x200.webp`],
    lt: 60,
    lb: 200,
    status: "Unit Available",
  },
];

const propertyBussiness = document.getElementById("property-bussiness");

propertiesBussiness.forEach((property) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add(
    "swiper-slide",
    "bg-white",
    "my-10",
    "shadow-2xl",
    "rounded-2xl",
  );

  swiperSlide.innerHTML = `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${property.images
          .map(
            (img) => `
          <div class="swiper-slide">
            <img src="${img}" alt="${property.type}" class="w-full h-full object-cover bg-white rounded-t-2xl">
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="px-6 pb-6">
          <h3 class="text-xl md:text-2xl font-extrabold mt-7 text-gray-800">${property.type}</h3>
    <p class="text-4xl tracking-tight text-amber-600 font-extrabold">${
      property.price
    }</p>

    <div class="mt-5 mb-2">
      <span class="px-3 py-2 text-sm font-bold rounded-lg ${
        property.status === "Unit Available"
          ? "bg-green-600 text-white"
          : "bg-red-700 text-white"
      }">
        ${property.status}
      </span>
    </div>

    <div class="overflow-x-auto">
      <table
            class="w-full border-collapse text-sm text-gray-700 mt-4 bg-white rounded-lg shadow-md overflow-hidden">
            <tbody>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🏡 Luas Tanah</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-lt">${property.lt}</span> m²
                </td>
              </tr>
              <tr class="odd:bg-gray-100">
                <td class="py-3 px-4">🏗 Luas Bangunan</td>
                <td class="py-3 px-4 text-right font-semibold text-amber-600">
                  <span id="modal-lb">${property.lb}</span> m²
                </td>
              </tr>
            </tbody>
          </table>
    </div>
    </div>
  `;

  propertyBussiness.appendChild(swiperSlide);
});

// Facilities
const facilities = [
  {
    id: 1,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/bandara-kualanamu.webp`,
    ],
  },
  {
    id: 2,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/Gerbang-Tol-Helvetia.webp`,
    ]
  },
  {
    id: 3,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/carefour.webp`,
    ],
  },
  {
    id: 4,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/rs-mitra-sejati.jpg`,
    ],
  },
  {
    id: 5,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/Sekolah-as-syafiyah.jpg`,
    ],
  },
  {
    id: 6,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/alazhar.webp`,
    ],
  },
  {
    id: 7,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/st-ignatius.jpg`,
    ],
  },
  {
    id: 8,
    images: [
      `${window.location.origin}/jcity-landing/public/facility/stmik-triguna-dharma.jpg`,
    ],
  },
];

const facility = document.getElementById("facilities");

facilities.forEach((property) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add(
    "swiper-slide",
    "bg-white",
    "my-10",
    "shadow-2xl",
    "rounded-2xl",
  );

  swiperSlide.innerHTML = `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${property.images
          .map(
            (img) => `
          <div class="swiper-slide">
            <img src="${img}" alt="${property.type}" class="w-full h-full object-cover bg-white rounded-2xl">
          </div>
        `
          )
          .join("")}
      </div>
    </div>

  `;

  facility.appendChild(swiperSlide);
});
