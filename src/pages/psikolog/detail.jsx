import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Briefcase, StarIcon, ThumbsUpIcon } from "lucide-react";
import logo from "../../assets/onggo.jpeg"

export default function PsikologDetail() {
  const expertise = [
    "Komunikasi",
    "Kekerasan",
    "Keuangan",
    "Anak dan Keluarga",
    "Seksualitas",
  ];
  return (
    <div className="p-32">
      <Card shadow="lg">
        <CardHeader>
          <div>
            <p className="font-bold text-primary-300 text-2xl">
              Profile & Jadwal Psikolog
            </p>
            <p className="text-gray-400">
              Lihat detail profil Psikolog dan pilih jadwal yang tersedia untuk
              sesi konselingmu.
            </p>
          </div>
        </CardHeader>
        <CardBody className="flex">
          <Card className="p-5">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                className="w-80 rounded-full"
                alt=""
              />
            </div>
            <p className="font-bold text-primary-300 text-2xl mb-4">
              Alvin Onggo, M.Psi., Psikolog
            </p>
            <div className="flex space-x-4 border-b-1 pb-7">
              <div className="flex rounded-3xl border-1 p-2">
                <StarIcon className="mr-1 text-yellow-300" />
                <p>5.0</p>
              </div>
              <div>
                <div className="flex rounded-3xl border-1 p-2">
                  <Briefcase className="mr-1" />
                  <p>8 years</p>
                </div>
              </div>
            </div>
            <div className="mt-4 border-b-1 py-3 px-5">
              <p className="text-gray-600">
                Hai, Perkenalkan saya Alvin, saya adalah Psikolog Industri dan
                Organisasi dari universitas Tarumanegara. Saya terbiasa
                menangani masalah yang cukup beragam, mulai dari kecemasan
                akademik, pendidikan, pengembangan karir, persiapan pensiun,
                pengembangan potensi diri, luka di masa lalu, mood, emosi,
                kecanduan, stress, burnout, depresi, pengalaman traumatik,
                hubungan asmara, pernikahan, keluarga, kehilangan & kematian.
                Saya menggunakan metode Counseling CBT, Solution Brief Focused,
                Dialectical behavior therapy, Rational emotive behavior therapy,
                Reconnect Compassion Therapy dan lainnya yang disesuaikan dengan
                kebutuhan. Saya akan senang sekali bisa mendampingi kamu dalam
                berposes dan mengoptimalkan pengembangan diri kamu. Wujud dari
                pola sehat bukan hanya tentang apa yang kamu makan, ini tentang
                apa yang kamu fikirkan dan rasakan juga. Kalau kamu merasa tidak
                baik-baik saja jangan ragu untuk konseling ke Psikolog ya.
              </p>
            </div>

            <div className="border-b-1 py-3 px-5">
              <div className="flex space-x-2 mb-3">
                <ThumbsUpIcon />
                <p>Konsultasi Seputar</p>
              </div>
              <div className="flex space-x-2">
                {expertise.map((item, index) => (
                  <div className="rounded-full border-1 p-2 ">{item}</div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            
          </Card>
        </CardBody>
      </Card>
    </div>
  );
}
