import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import landing from "../../../assets/landing-web.png";

export default function HomeContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Konsultasi mudah
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Solusi untuk Kesehatan Mental Anda
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Dapatkan akses cepat dan aman ke para profesional kesehatan mental. Kami hadir untuk mendengarkan, memahami, dan membantu Anda menemukan jalan terbaik menuju kesejahteraan mental.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Platform Konsultasi Kesehatan Mental"
            src={landing}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Kami menyediakan layanan konsultasi yang aman, terjangkau, dan mudah diakses oleh semua orang. Dapatkan solusi yang tepat untuk setiap masalah mental Anda, dari kecemasan hingga depresi, melalui sesi online yang bisa diatur sesuai kebutuhan.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Konsultasi aman dan privat.
                    </strong>{" "}
                    Setiap sesi berlangsung dengan enkripsi penuh sehingga privasi Anda terjaga.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Keamanan data.
                    </strong>{" "}
                    Kami melindungi informasi pribadi Anda dengan sertifikat SSL dan sistem keamanan terbaik.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Dukungan 24/7.
                    </strong>{" "}
                    Kami menyediakan layanan dukungan sepanjang waktu untuk setiap kebutuhan mental Anda.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Layanan ini dirancang agar mudah diakses di mana saja, kapan saja. Temukan kemudahan berkonsultasi dengan para ahli yang sudah berpengalaman di bidang kesehatan mental.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Siap mendengar, siap membantu.
              </h2>
              <p className="mt-6">
                Kami hadir tanpa syarat untuk mendengarkan keluh kesah Anda. Konsultasi sekarang juga dan rasakan perubahan nyata dalam kesehatan mental Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
