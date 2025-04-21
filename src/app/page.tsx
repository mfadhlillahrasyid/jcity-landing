"use client";

import { List, problemLists } from "@/components/lists/problem-lists";
import { List2, whyLists } from "@/components/lists/why-lists";
import { List3, facilityLists } from "@/components/lists/facility-lists";
import { PropertyCard } from "@/components/catalog-property/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PropertyBussiness } from "@/components/catalog-property/bussiness";
import { Facilities2 } from "@/components/lists/facility-list-2";
import {
  FaPlane,
  FaRoad,
  FaShoppingCart,
  FaHospitalAlt,
  FaSchool,
  FaUniversity,
  FaWhatsapp,
  FaStreetView,
} from "react-icons/fa";
import Image from "next/image";

const properties = [
  {
    id: 1,
    price: "J-Paradise L. 6m",
    type: "Family Mansion",
    images: ["/type/j-paradise-maket.webp"],
    lt: 72,
    lb: 110,
    kt: 3,
    km: 3,
    carport: 1,
    status: "Unit Tersedia",
  },
  {
    id: 2,
    price: "J-Paradise L. 8m",
    type: "Family Mansion",
    images: ["/type/j-paradise-maket-2.webp"],
    lt: 112,
    lb: 175,
    kt: 4,
    km: 3,
    carport: 2,
    status: "Unit Tersedia",
  },
  {
    id: 3,
    price: "Vienna",
    type: "Family Mansion",
    images: ["/type/1.-Vienna-Type-6-depan-300x200.webp"],
    lt: 90,
    lb: 72,
    kt: 2,
    km: 2,
    carport: 1,
    status: "Unit Tersedia",
  },
  {
    id: 4,
    price: "Vienna Elite",
    type: "Family Mansion",
    images: ["/type/1.-Vienna-Type-6-depan-1-300x200.webp"],
    lt: 90,
    lb: 97,
    kt: 3,
    km: 3,
    carport: 2,
    status: "Unit Tersedia",
  },
  {
    id: 5,
    price: "J-Elite V",
    type: "Family Mansion",
    images: ["/type/1.-J.-Elite-Type-V-depan-300x200.webp"],
    lt: 84,
    lb: 112,
    kt: 3,
    km: 3,
    carport: 1,
    status: "Unit Tersedia",
  },
  {
    id: 6,
    price: "J-Crown Type Jade",
    type: "Family Mansion",
    images: ["/type/1.-J.-Crown-depan-300x200.webp"],
    lt: 128,
    lb: 175,
    kt: 4,
    km: 3,
    carport: 2,
    status: "Unit Tersedia",
  },
];

const propertiesBussiness = [
  {
    id: 1,
    price: "J-Square",
    type: "Bussiness",
    images: [`/type/1.-J.-Square-depan-300x200.webp`],
    lt: 64,
    lb: 192,
    status: "Unit Tersedia",
  },
  {
    id: 2,
    price: "J-Point A",
    type: "Bussiness",
    images: [`/type/1.-J.-Point-Type-A-depan-300x200.webp`],
    lt: 72,
    lb: 246,
    status: "Unit Tersedia",
  },
  {
    id: 3,
    price: "J-Point B",
    type: "Bussiness",
    images: [`/type/1.-J.-Point-Type-B-depan-1-300x200.webp`],
    lt: 87,
    lb: 298,
    status: "Unit Tersedia",
  },
  {
    id: 4,
    price: "J-Line",
    type: "Bussiness",
    images: [`/type/1.-J.-Line-depan-300x200.webp`],
    lt: 144,
    lb: 504,
    status: "Unit Tersedia",
  },
  {
    id: 5,
    price: "Cemara Bisnis Point",
    type: "Bussiness",
    images: [`/type/img3-300x200.webp`],
    lt: 60,
    lb: 200,
    status: "Unit Tersedia",
  },
];

const facilities = [
  {
    id: 1,
    icon: <FaPlane />,
    desc: "Bandara Kuala Namu 40 Menit",
    images: [`/facility/bandara-kualanamu.webp`],
  },
  {
    id: 2,
    icon: <FaRoad />,
    desc: "Tol Helvetia 30 menit",
    images: [`/facility/Gerbang-Tol-Helvetia.webp`],
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    desc: "Carrefour 7 menit",
    images: [`/facility/carefour.webp`],
  },
  {
    id: 4,
    icon: <FaHospitalAlt />,
    desc: "RS Mitra Sejati 10 menit",
    images: [`/facility/rs-mitra-sejati.jpg`],
  },
  {
    id: 5,
    icon: <FaSchool />,
    desc: "Sekolah As-Syafiiyah 8 menit",
    images: [`/facility/Sekolah-as-syafiyah.jpg`],
  },
  {
    id: 6,
    icon: <FaSchool />,
    desc: "Sekolah Al-Azhar 8 menit",
    images: [`/facility/alazhar.webp`],
  },
  {
    id: 7,
    icon: <FaSchool />,
    desc: "Sekolah St Ignatius 8 menit",
    images: [`/facility/st-ignatius.jpg`],
  },
  {
    id: 8,
    icon: <FaUniversity />,
    desc: "STMIK Triguna Dharma 8 menit",
    images: [`/facility/stmik-triguna-dharma.jpg`],
  },
];

export default function Home() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart");
    }
  };

  const message = encodeURIComponent(
    "Halo! Saya tertarik dengan perumahan JCity yang saya lihat. Boleh minta info lebih lengkap atau brosurnya? Terima kasih! 🙏"
  );

  const waLink = `https://wa.me/6281267777831?text=${message}`;

  return (
    <>
      <div className="bg-neutral-300 max-w-lg mx-auto font-medium">
        <Image
          src="/1.webp"
          width={1080}
          height={1590}
          className="bg-white"
          alt="Jcity-img"
        />

        <div className="bg-white text-sm md:text-[16px] leading-6 md:leading-7 mx-auto pb-10 px-10 space-y-3">
          <p className="text-neutral-700">
            Pernah kepikiran gak?{" "}
            <mark>
              <b>Setiap bulan bayar kontrakan</b>
            </mark>
            , duit keluar terus, tapi gak ada aset yang bisa kamu miliki.
          </p>
          <List items={problemLists} />
          <p className="text-neutral-700">
            Udah waktunya{" "}
            <b>
              <i>STOP</i>
            </b>{" "}
            jadi penonton dan mulai jadi pemilik rumah impianmu sendiri!
          </p>
        </div>

        <Image
          src="/2.webp"
          width={800}
          height={600}
          className="bg-white"
          alt="Jcity-img"
        />

        <div className="bg-white p-10 mx-auto text-sm md:text-[16px] leading-6 md:leading-7 flex flex-col items-center">
          <Image
            src="/logo-jcity.png"
            width={300}
            height={138}
            alt="Logo Jcity"
            className="w-auto h-19"
          />
          <h2 className="font-extrabold text-2xl sm:text-3xl text-center text-amber-800 mt-5">
            Jcity Itu Apaan Sih?
          </h2>
          <p className="text-neutral-700 mt-5">
            Jcity bukan cuma kompleks perumahan biasa, tapi komunitas nyaman dan
            modern yang dirancang biar kamu bisa hidup lebih tenang, nyaman, dan
            bahagia.
          </p>
          <p className="text-neutral-700 mt-5">
            Hunian dirancang dengan desain arsitektur modern minimalis yang
            menonjolkan nilai estetika dan fungsionalitas.
          </p>
        </div>

        <div className="bg-white text-sm md:text-[16px] leading-6 md:leading-7 mx-auto p-10 space-y-3">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-amber-800 mb-5">
            Kenapa Harus Punya Rumah di Jcity?
          </h2>
          <List2 items={whyLists} />
        </div>

        <div className="bg-amber-600/80 p-10">
          <h2 className="font-extrabold text-2xl md:text-3xl text-center sm:text-3xl text-white mb-4">
            Fasilitas J.City
          </h2>
          <p className="text-sm md:text-[16px] leading-6 md:leading-7 text-center text-white mb-8">
            Tersedia berbagai fasilitas unggulan guna memberi kenyamanan bagi
            para penghuninya
          </p>
          <List3 items={facilityLists} />
        </div>

        <div className="bg-white pt-10 px-10 mx-auto text-lg leading-8 items-center">
          <h2 className="font-extrabold text-2xl md:text-3xl sm:text-3xl text-center text-amber-800 mt-5">
            Yuk Intip Rumah JCity
          </h2>
          <p className="text-sm md:text-[16px] leading-6 md:leading-7 text-center text-amber-800 mt-5">
            Kami memiliki banyak type rumah untuk kamu, sesuai dengan
            kebutuhanmu
          </p>
        </div>

        <div className="bg-white">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper py-10"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bg-white px-10 pb-10 mx-auto text-sm md:text-[16px] leading-6 md:leading-7 flex flex-col items-center">
          <p className="text-neutral-700 mt-5">
            Gimana nih gak kebayang bisa punya rumah <b>super mewah</b> dengan
            <mark>Budget yang Ramah dikantong</mark>
          </p>
          <p className="text-neutral-700 mt-5">
            Rumah idaman yang nyaman dengan fasilitas lengkap. Lokasi strategis,
            mudah diakses melalui jalan protokol Kota Medan.
          </p>
        </div>

        <Image
          src="/3.webp"
          width={800}
          height={600}
          className="bg-white"
          alt="Jcity-img"
        />

        <div className="bg-white pt-10 px-10 mx-auto text-lg leading-8 items-center">
          <p className="text-sm md:text-[16px] leading-6 md:leading-7 text-neutral-700">
            Di Jcity kamu gak hanya bisa tinggal dengan nyaman, tapi mau buka
            usaha apapun.. di Jcity selalu ramai oleh Customer dikarenakan
            lokasi Strategis di pusat kota Medan
          </p>
          <h2 className="font-extrabold text-2xl md:text-3xl sm:text-3xl text-amber-800 mt-5">
            Mau punya Ruko bisnis di Jcity ? Bisa banget!
          </h2>
        </div>

        <div className="bg-white">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper py-10"
          >
            {propertiesBussiness.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyBussiness property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bg-white pt-10 px-10 mx-auto text-lg leading-8 items-center">
          <h2 className="font-extrabold text-2xl md:text-3xl sm:text-3xl text-center text-amber-800 mt-5">
            Temukan Area Sekitar
          </h2>
          <p className="text-sm md:text-[16px] leading-6 md:leading-7 text-center text-neutral-700 mt-5">
            J.City dikelilingi berbagai fasilitas umum dan infrastruktur
            transportasi publik.
          </p>
        </div>

        <div className="bg-white">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            pagination={{ clickable: true }}
            centeredSlides={true}
            modules={[Pagination]}
            className="mySwiper py-10"
          >
            {facilities.map((facility) => (
              <SwiperSlide key={facility.id}>
                <Facilities2 facility={facility} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="bg-white px-10 pb-10 mx-auto text-sm md:text-[16px] leading-6 md:leading-7 flex flex-col items-center">
          <p className="text-neutral-700 mt-5">
            <mark>Hunian di Lokasi Impian</mark>
            Memiliki rumah bukan hanya soal tempat tinggal, tapi juga tentang
            membangun masa depan yang lebih baik.
          </p>
          <p className="text-neutral-700 mt-5">
            <strong>JCity</strong> menghadirkan hunian modern di lokasi
            strategis yang tidak hanya memberikan kenyamanan bagi Anda dan
            keluarga, tetapi juga memiliki potensi investasi yang menjanjikan.
          </p>
        </div>

        <Image
          src="/5.webp"
          width={800}
          height={600}
          className="bg-white"
          alt="Jcity-img"
        />

        <div className="bg-white px-10 mx-auto text-sm md:text-[16px] leading-6 md:leading-7 flex flex-col">
          <p className="text-neutral-700 mt-5">
            💡 <b>Tinggal nyaman</b>, Inilah kesempatan emas untuk memiliki
            hunian yang memberikan manfaat ganda:{" "}
            <b>tempat tinggal yang hangat</b> dan
            <mark>aman untuk keluarga</mark>, serta
            <b>aset bernilai tinggi</b> untuk masa depan Anda.
          </p>
          <h2 className="font-extrabold text-4xl text-amber-800 mt-5">
            Masih Ragu??
          </h2>
          <p className="text-neutral-700 mt-5">
            Yuk, rasakan sendiri kenyamanan dan potensi besar yang ditawarkan
            JCity!
          </p>
          <p className="text-neutral-700 mt-5">
            Dimana lagi, Modal <b>1M</b> bisa dapat rumah Mewah dan Estetik di
            Kota Medan
          </p>
        </div>

        {/* Call to Action Buttin */}
        <div className="bg-white pt-10 px-10 mx-auto text-sm md:text-[16px] leading-6 md:leading-7">
          <div className="max-w-xs mx-auto flex flex-col gap-4">
            <a
              href={waLink}
              onClick={handleClick}
              className="inline-flex justify-center items-center gap-3 px-6 py-5 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:brightness-110 text-white text-md tracking-tight font-semibold rounded-xl shadow-lg transition-all duration-200 active:scale-95 active:ring-4 active:ring-green-300"
            >
              <FaWhatsapp className="text-4xl" />
              Hubungi Marketing Kami!
            </a>

            <a
              href="https://storage.net-fs.com/hosting/6401033/3/index.ht"
              target="_blank"
              className="inline-flex justify-center items-center gap-3 px-6 py-5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:brightness-110 text-white text-md tracking-tight font-semibold rounded-xl shadow-lg transition-all duration-200 active:scale-95 active:ring-4 active:ring-amber-300"
            >
              <FaStreetView className="text-4xl" />
              Virtual Room Tour
            </a>
          </div>
        </div>

        <div className="bg-white pt-5 px-10 mx-auto text-lg leading-8 items-center">
          <p className="text-sm md:text-[16px] leading-6 md:leading-7 text-center font-bold text-neutral-700 mb-5">
            Atau Kunjungi Langsung Unit Kami
          </p>
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.7173798347867!2d98.66121359597841!3d3.5351020305581384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313b01b65c0847%3A0x192f7593c7d3ae06!2sJ%20City%20Residence%20by%20Capital%20Property!5e0!3m2!1sid!2sus!4v1745217885917!5m2!1sid!2sus"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Image
          src="/footer.png"
          width={800}
          height={473}
          className="bg-white"
          alt="Jcity-img"
        />

        <div className="bg-amber-800 text-white p-6 text-center">
          <p className="text-sm">&copy; 2024 JCity. All Right Reserved</p>
        </div>
      </div>
    </>
  );
}
