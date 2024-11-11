/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import { psikolog } from "../../data-json/psikolog";
import {
  ArrowDown,
  ArrowDownWideNarrow,
  ArrowRight,
  Calendar,
  FilterIcon,
  StarIcon,
  StarsIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const sortOptions = [
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "hari",
    name: "Hari",
    options: [
      { value: "senin", label: "Senin", checked: false },
      { value: "selasa", label: "Selasa", checked: false },
      { value: "rabu", label: "Rabu", checked: false },
      { value: "kamis", label: "Kamis", checked: false },
      { value: "jumat", label: "Jumat", checked: false },
      { value: "sabtu", label: "Sabtu", checked: false },
    ],
  },
  {
    id: "rating",
    name: "Rating",
    options: [
      { value: "1", label: "1 Stars", checked: false },
      { value: "2", label: "2 Stars", checked: false },
      { value: "3", label: "3 Stars", checked: true },
      { value: "4", label: "4 Stars", checked: false },
      { value: "5", label: "5 Stars", checked: false },
    ],
  },
];

export default function Example() {
  const [selectedKeys, setSelectedKeys] = React.useState();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <div className="p-11">
        <p className="font-bold text-4xl">Ruang Konsultasi Pribadi Anda</p>
        <p>
          Terhubung dengan profesional bersertifikat dari kenyamanan rumah Anda.{" "}
          <br />
          Temukan bimbingan, dukungan, dan wawasan yang sesuai dengan kebutuhan
          Anda—kapan saja dan di mana saja.
        </p>
      </div>
      <div className="flex justify-between mt-10 px-11 py-3 border-y-1 mb-10">
        <Dropdown>
          <DropdownTrigger className="cursor-pointer">
            <div className="flex items-center">
              <span>Sort</span>
              <ArrowDownWideNarrow className="ml-2" />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            {sortOptions.map((option) => (
              <DropdownItem key={option.name} eventKey={option.name}>
                {option.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <div className="flex space-x-10">
          {filters.map((filter) => (
            <Dropdown key={filter.id}>
              <DropdownTrigger className="cursor-pointer">
                <div className="flex items-center">
                  <span>{filter.name}</span>
                  <FilterIcon className="ml-2" />
                </div>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                {filter.options.map((option) => (
                  <DropdownItem key={option.value} eventKey={option.value}>
                    <Checkbox>{option.label}</Checkbox>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ))}
        </div>
      </div>

      <div className="px-20 grid grid-cols-5 gap-8">
        {psikolog.map((item) => (
          <Card className="cursor-pointer z-0" key={item.id} shadow>
            <CardHeader className="bg-gray-50">
              <img src={item.image} alt="" className="w-full rounded-full" />
            </CardHeader>
            <CardBody className="space-y-1 p-3">
              <p className="font-bold text-lg text-primary-400">{item.name}</p>
              <div>
                <p>Expertise</p>
                <div className="flex space-x-1.5">
                  {item.expertise.map((expertise) => (
                    <div className="bg-gray-100 rounded-md p-1">
                      {expertise}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex">
                <StarIcon className="mr-2 text-yellow-400" />
                <p>{item.rating}</p>
              </div>
              <div className="flex">
                <Calendar className="mr-2 text-primary-400" />
                <p>{item.hari}</p>
              </div>
              <div onClick={setIsOpen} className="text-end">
                <div className="text-primary-400 flex justify-end">
                  Lihat Jadwal{" "}
                  <span>
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Jadwal Yang tersedia
                </ModalHeader>
                <ModalBody>
                  <p className="text-sm text-gray-400 text-end">
                    10 jadwal Tersedia
                  </p>
                  <div className="grid grid-cols-4">
                    {psikolog[0].jadwal.map((jadwal) => (
                      <div className="border-2 rounded-lg m-3 border-primary-400 p-2 text-center">
                        {jadwal}
                      </div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Batal
                  </Button>
                  <Button color="primary" onPress={() => navigate("/payment")}>
                    Pilih Topik
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="flex justify-center my-10">
        <Pagination color="primary" showControls total={10} initialPage={1} />
      </div>
    </div>
  );
}
