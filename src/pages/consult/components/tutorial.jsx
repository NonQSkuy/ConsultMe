import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  BadgeDollarSign,
  CalendarCheckIcon,
  UserSearchIcon,
} from "lucide-react";

export default function TutorialConsult() {
  const [selected, setSelected] = useState("personal");
  return (
    <div>
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                Konsultasi dengan Profesional
              </h2>
              <p className="text-lg text-gray-600">
                Temukan solusi terbaik bersama tim kami yang siap membantu Anda
                dalam berbagai aspek kehidupan dan relasi. Dapatkan panduan dari
                konsultan berpengalaman yang peduli dengan kebutuhan Anda.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col mt-14">
            <Tabs
              size="lg"
              color="primary"
              variant="underlined"
              aria-label="Pilihan Konsultasi"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="personal" title="Pribadi">
                <div className="flex flex-col space-y-5 w-2/3">
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <UserSearchIcon
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Konsultan Pribadi
                        </CardHeader>
                        <CardBody className="text-2">
                          Diskusikan kebutuhan Anda dengan konsultan pribadi
                          kami. Mereka siap memberikan saran dan solusi untuk
                          membantu Anda menghadapi tantangan pribadi dan
                          emosional.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <CalendarCheckIcon
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Buat Jadwal
                        </CardHeader>
                        <CardBody className="text-2">
                          Atur jadwal konsultasi sesuai waktu yang paling nyaman
                          bagi Anda. Kami akan memastikan pengalaman konsultasi
                          yang fleksibel dan sesuai kebutuhan.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <BadgeDollarSign
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Pembayaran Aman
                        </CardHeader>
                        <CardBody className="text-2">
                          Kami menyediakan berbagai metode pembayaran yang aman
                          dan mudah, memastikan Anda fokus pada konsultasi tanpa
                          khawatir soal administrasi.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                </div>
              </Tab>
              <Tab key="couples" title="Pasangan">
                <div className="flex flex-col space-y-5 w-2/3">
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <UserSearchIcon
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Konsultan Pribadi
                        </CardHeader>
                        <CardBody className="text-2">
                          Diskusikan kebutuhan Anda dengan konsultan pribadi
                          kami. Mereka siap memberikan saran dan solusi untuk
                          membantu Anda menghadapi tantangan pribadi dan
                          emosional.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <CalendarCheckIcon
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Buat Jadwal
                        </CardHeader>
                        <CardBody className="text-2">
                          Atur jadwal konsultasi sesuai waktu yang paling nyaman
                          bagi Anda. Kami akan memastikan pengalaman konsultasi
                          yang fleksibel dan sesuai kebutuhan.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <BadgeDollarSign
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Pembayaran Aman
                        </CardHeader>
                        <CardBody className="text-2">
                          Kami menyediakan berbagai metode pembayaran yang aman
                          dan mudah, memastikan Anda fokus pada konsultasi tanpa
                          khawatir soal administrasi.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                </div>
              </Tab>
              <Tab key="teen" title="Remaja">
                <div className="flex flex-col space-y-5 w-2/3">
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <UserSearchIcon
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Konsultan Pribadi
                        </CardHeader>
                        <CardBody className="text-2">
                          Diskusikan kebutuhan Anda dengan konsultan pribadi
                          kami. Mereka siap memberikan saran dan solusi untuk
                          membantu Anda menghadapi tantangan pribadi dan
                          emosional.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <CalendarCheckIcon
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Buat Jadwal
                        </CardHeader>
                        <CardBody className="text-2">
                          Atur jadwal konsultasi sesuai waktu yang paling nyaman
                          bagi Anda. Kami akan memastikan pengalaman konsultasi
                          yang fleksibel dan sesuai kebutuhan.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 ">
                    <div className="flex align-middle">
                      <BadgeDollarSign
                        size={110}
                        className="mr-5 text-primary-400"
                      />
                      <div>
                        <CardHeader className="font-bold text-primary">
                          Pembayaran Aman
                        </CardHeader>
                        <CardBody className="text-2">
                          Kami menyediakan berbagai metode pembayaran yang aman
                          dan mudah, memastikan Anda fokus pada konsultasi tanpa
                          khawatir soal administrasi.
                        </CardBody>
                      </div>
                    </div>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
