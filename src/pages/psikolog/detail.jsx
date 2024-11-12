import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import {
  Badge,
  BadgeCheckIcon,
  Briefcase,
  MessageCircle,
  StarIcon,
  ThumbsUpIcon,
} from "lucide-react";
import logo from "../../assets/onggo.jpeg";
import { useNavigate } from "react-router-dom";

export default function PsikologDetail() {
  const expertise = [
    "Komunikasi",
    "Kekerasan",
    "Keuangan",
    "Anak dan Keluarga",
    "Seksualitas",
  ];

  const jadwal = [
    {
      id: 1,
      name: "Senin",
      tanggal: "12 Nov",
    },
    {
      id: 2,
      name: "Selasa",
      tanggal: "13 Nov",
    },
    {
      id: 3,
      name: "Rabu",
      tanggal: "14 Nov",
    },
    {
      id: 4,
      name: "Kamis",
      tanggal: "15 Nov",
    },
    {
      id: 5,
      name: "Jumat",
      tanggal: "16 Nov",
    },
    {
      id: 6,
      name: "Sabtu",
      tanggal: "17 Nov",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="p-32 flex">
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
        <CardBody className="flex flex-row space-x-10">
          <Card className="p-5 w-2/3">
            <div className="flex items-center justify-center">
              <img src={logo} className="w-80 rounded-full" alt="" />
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
                  <p>8 tahun</p>
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

            <div className="border-b-1 py-2 px-5">
              <div className="flex space-x-2 mb-3">
                <BadgeCheckIcon />
                <div>
                  <p>Nomor Izin Praktik</p>
                  <p>16782122</p>
                </div>
              </div>
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
          <Card className="w-1/3">
            <CardBody>
              <div className="flex space-x-3 justify-center pb-4 border-b-1">
                {jadwal.map((jadwal) => {
                  return (
                    <Card className="w-16 p-1.5 text-center cursor-pointer hover:bg-primary-300">
                      <p>{jadwal.tanggal}</p>
                      <p>{jadwal.name}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="pt-5 px-3">
                <p className="text-primary-400 font-semibold">
                  Pilih Jadwal Konsultasi
                </p>
                <div className="flex space-x-3">
                  <div className="rounded bg-gray-400 w-24 text-center p-3 cursor-pointer">
                    14.00
                  </div>
                  <div className="rounded bg-primary-400 w-24 text-center p-3 cursor-pointer">
                    15.00
                  </div>
                  <div className="rounded bg-gray-400 w-24 text-center p-3 cursor-pointer">
                    16.00
                  </div>
                  <div className="rounded bg-gray-400 w-24 text-center p-3 cursor-pointer">
                    20.00
                  </div>
                </div>
                <Button onClick={() => navigate("/payment")} className="w-full rounded-2xl bg-primary-300 mt-10 text-white">
                  Jadwalkan Sekarang
                </Button>
              </div>
            </CardBody>
          </Card>
        </CardBody>

        <CardFooter className="w-full">
          <CardBody className="flex justify-between w-full flex-row">
            <div className="w-1/2">
              <p className="font-bold text-2xl mb-4">Customer Reviews</p>
              <div className="flex items-center">
                <StarIcon color="#ffae00" fill="#ffae00" className="mr-2 " />
                <StarIcon color="#ffae00" fill="#ffae00" className="mr-2 " />
                <StarIcon color="#ffae00" fill="#ffae00" className="mr-2 " />
                <StarIcon color="#ffae00" fill="#ffae00" className="mr-2 " />
                <StarIcon color="#ffae00" fill="#ffae00" className="mr-2 " />
                <p className="font-semibold text-sm">Based on 735 reviews</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <p className="mr-2 ">5</p>
                    <StarIcon color="#ffae00" fill="#ffae00" />
                  </div>
                  <Progress
                    color="warning"
                    aria-label="Loading..."
                    value={70}
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                  />
                  <p className="text-gray-500 ml-3">70%</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <p className="mr-2 ">4</p>
                    <StarIcon color="#ffae00" fill="#ffae00" />
                  </div>
                  <Progress
                    color="warning"
                    aria-label="Loading..."
                    value={25}
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                  />
                  <p className="text-gray-500 ml-3">25%</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <p className="mr-2 ">3</p>
                    <StarIcon color="#ffae00" fill="#ffae00" />
                  </div>
                  <Progress
                    color="warning"
                    aria-label="Loading..."
                    value={10}
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                  />
                  <p className="text-gray-500 ml-3">10%</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <p className="mr-2 ">2</p>
                    <StarIcon color="#ffae00" fill="#ffae00" />
                  </div>
                  <Progress
                    color="warning"
                    aria-label="Loading..."
                    value={3}
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                  />
                  <p className="text-gray-500 ml-3">3%</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <p className="mr-2 ">1</p>
                    <StarIcon color="#ffae00" fill="#ffae00" />
                  </div>
                  <Progress
                    color="warning"
                    aria-label="Loading..."
                    value={2}
                    classNames={{
                      base: "max-w-md",
                      track: "drop-shadow-md border border-default",
                      indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                      label: "tracking-wider font-medium text-default-600",
                      value: "text-foreground/60",
                    }}
                  />
                  <p className="text-gray-500 ml-3">2%</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-1/2">
              <div className="space-y-9">
                <div className="flex border-b-2 pb-3 border-gray-100">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div>
                    <div className="ml-4">
                      <p>Frenky Kwee</p>
                      <p className="text-gray-400 text-sm">16 Juli, 2023</p>
                    </div>
                    <div className="flex ml-4">
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                    </div>
                    <p className="ml-4">
                      “Baru pertama kali konseling dengan psikolog pria, tidak
                      ada judgement. Terima kasih sarannya, akhirnya saya bisa
                      ceritakan beban yg selama ini saya simpan.”
                    </p>
                  </div>
                </div>
                <div className="flex border-b-2 pb-3 border-gray-100 ">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div>
                    <div className="ml-4">
                      <p>Frenky Kwee</p>
                      <p className="text-gray-400 text-sm">16 Juli, 2023</p>
                    </div>
                    <div className="flex ml-4">
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                    </div>
                    <p className="ml-4">
                      “Baru pertama kali konseling dengan psikolog pria, tidak
                      ada judgement. Terima kasih sarannya, akhirnya saya bisa
                      ceritakan beban yg selama ini saya simpan.”
                    </p>
                  </div>
                </div>
                <div className="flex border-b-2 pb-3 border-gray-100 ">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div>
                    <div className="ml-4">
                      <p>Frenky Kwee</p>
                      <p className="text-gray-400 text-sm">16 Juli, 2023</p>
                    </div>
                    <div className="flex ml-4">
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                    </div>
                    <p className="ml-4">
                      “Baru pertama kali konseling dengan psikolog pria, tidak
                      ada judgement. Terima kasih sarannya, akhirnya saya bisa
                      ceritakan beban yg selama ini saya simpan.”
                    </p>
                  </div>
                </div>
                <div className="flex border-b-2 pb-3 border-gray-100 ">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <div>
                    <div className="ml-4">
                      <p>Frenky Kwee</p>
                      <p className="text-gray-400 text-sm">16 Juli, 2023</p>
                    </div>
                    <div className="flex ml-4">
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                      <StarIcon
                        color="#ffae00"
                        fill="#ffae00"
                        className="mr-2 "
                      />
                    </div>
                    <p className="ml-4">
                      “Baru pertama kali konseling dengan psikolog pria, tidak
                      ada judgement. Terima kasih sarannya, akhirnya saya bisa
                      ceritakan beban yg selama ini saya simpan.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </CardFooter>
      </Card>
    </div>
  );
}
