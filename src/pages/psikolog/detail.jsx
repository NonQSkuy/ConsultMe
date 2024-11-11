import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function PsikologDetail() {
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
        <CardBody>
            <Card>

            </Card>
        </CardBody>
      </Card>
    </div>
  );
}
