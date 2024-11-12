import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  image,
  Image,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Briefcase, StarIcon, Video } from "lucide-react";
import logo from "../assets/onggo.jpeg";
import bca from "../assets/bca_logo.png";
import bni from "../assets/bni_logo.png";
import bri from "../assets/bri_logo.png";
import mandiri from "../assets/mandiri_logo.png";

export default function Payment() {
  const bank = [
    { key: "bca", label: "BCA", image: bca },
    { key: "bni", label: "BNI", image: bni },
    { key: "bri", label: "BRI", image: bri },
    { key: "mandiri", label: "Mandiri", image: mandiri },
  ];
  return (
    <div className="py-20 px-80">
      <div className="mb-10">
        <p className="text-2xl font-bold text-primary-400">Pemesanan</p>
        <p className="text-tiny text-gray-400">
          Ini halaman terakhir dari proses pemesananmu. Pastikan semua sudah
          benar, ya. :)
        </p>
      </div>
      <div className="flex justify-between space-x-5">
        <div className="w-2/5 flex flex-col space-y-5">
          <Card>
            <CardBody>
              <p className="font-semibold text-blue-950">Paket Pemesanan</p>
              <div className="flex justify-between items-center rounded-xl bg-primary-50 p-2">
                <div className="flex justify-around p-2 space-x-3 items-center">
                  <div className="bg-teal-500 rounded-lg p-1">
                    <Video size={28} color="white" />
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">
                      Konseling Couple
                    </p>
                    <p className="font-bold text-primary-400">
                      Paket Konseling Pasangan
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-tiny font-semibold text-gray-600">Harga</p>
                  <p className="text-teal-500 font-bold">Rp 150.000</p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="px-5 py-4">
            <CardHeader className="py-6 flex flex-row items-center border-b-2">
              <div className="">
                <Image src={logo} className="rounded-full" width={80} />
              </div>
              <div className=" ml-3">
                <p className="font-bold text-blue-950 text-lg">
                  Alvin Onggo, M.Psi., Psikolog
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center justify-center rounded-2xl border-gray-500 border-1 p-1.5">
                    <StarIcon
                      fill="#fde047"
                      width={15}
                      className="mr-1 text-yellow-300"
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                  <div>
                    <div className="flex items-center rounded-xl border-1 border-gray-500 p-1.5">
                      <Briefcase width={15} className="mr-1" />
                      <p className="text-sm">8 tahun</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-blue-950 font-semibold">Detail Konseling</p>
              <div className="grid grid-cols-3 mt-4 text-sm gap-y-3">
                <p className="text-gray-700 font-semibold">Topik Konseling</p>
                <p className="col-span-2 text-blue-950">
                  : Persiapan Pernikahan
                </p>

                <p className="text-gray-700 font-semibold">Metode Konseling</p>
                <p className="col-span-2 text-blue-950">: Video Call</p>

                <p className="text-gray-700 font-semibold">Jumlah Sesi</p>
                <p className="col-span-2 text-blue-950">: 1 Sesi</p>

                <p className="text-gray-700 font-semibold">Durasi Konseling</p>
                <p className="col-span-2 text-blue-950">: 60 Menit</p>

                <p className="text-gray-700 font-semibold">Jadwal Sesi</p>
                <p className="col-span-2 text-blue-950">: Senin, 18 Nov 2024</p>

                <p className="text-gray-700 font-semibold">Waktu Sesi</p>
                <p className="col-span-2 text-blue-950">: 10:00 - 11:00 WIB</p>

                <p className="text-gray-700 font-semibold">Kedaluwarsa</p>
                <p className="col-span-2 text-blue-950">: Jumat, 22 Nov 2024</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="w-3/5">
          <Card className="p-5">
            <CardHeader>
              <p className="font-semibold text-blue-950">Pembayaran</p>
            </CardHeader>
            <CardBody>
              <Select
                items={bank}
                label="Pilih Metode Pembayaran"
                placeholder="Pilih Metode Pembayaran"
                labelPlacement="outside"
                renderValue={(items) => {
                  return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                      <img
                        alt={item.data.label}
                        width={30}
                        src={item.data.image}
                      />
                      <p>{item.data.label}</p>
                    </div>
                  ));
                }}
              >
                {(bank) => (
                  <SelectItem key={bank.key} textValue={bank.label}>
                    <div className="flex gap-2 items-center">
                      <img
                        alt={bank.label}
                        width={30}
                        src={bank.image}
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{bank.label}</span>
                      </div>
                    </div>
                  </SelectItem>
                )}
              </Select>

              <div className="flex items-center justify-between py-5 border-b-1 border-gray-300 mb-5">
                <p className="text-blue-900 font-semibold">Total Harga Paket</p>
                <p className="font-bold text-primary-400">Rp 150.000</p>
              </div>

              <div className="flex justify-between items-center mb-10">
                <p className="text-lg font-semibold text-blue-950">Total Biaya</p>
                <p className="font-bold text-orange-500 text-lg">Rp 150.000</p>
              </div>
              
              <Checkbox>
                Saya telah membaca dan menyetujui <a href="#" className="text-primary-400">Syarat & Ketentuan</a> yang berlaku
              </Checkbox>

              <Button color="warning" className="text-white mt-10" size="lg" text>Bayar</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
