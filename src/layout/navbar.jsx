import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Badge,
} from "@nextui-org/react";
import Logo from "../assets/logo.png";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  
  return (
    <Navbar
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",  
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand className="">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          alt=""
          className="w-16 cursor-pointer"
        />
      </NavbarBrand>
      <NavbarContent
        className="flex gap-4 justify-between  w-1/2"
        justify="end"
      >
        <NavbarItem>
          <Link className="font-semibold" color="foreground" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-semibold"
            href="/consult"
            aria-current="page"
            color="foreground"
          >
            Consult
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold" color="foreground" href="/calendar">
            Calendar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-semibold" color="foreground" href="/forum">
            Forum
          </Link>
        </NavbarItem>
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Badge color="danger" content={1} isInvisible={false} shape="circle">
          <Bell className="cursor-pointer" size={30} />
        </Badge>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2 max-w-80 space-y-3">
              <div className="text-small border-b-1 py-1 rounded-md bg-primary-200 p-2 cursor-pointer">
                3 Hari lagi kamu ada jadwal konsultasi dengan psikolog{" "}
                <span className="font-bold">Junthau Hans William</span>
                <p className="text-xs text-gray-500 text-end">3 Days ago</p>
              </div>
              <div className="text-small border-b-1 py-1 rounded-md bg-gray-200 p-2 cursor-pointer">
                Mood kamu lagi bagus hari ini, pertahankan ya !!
                <p className="text-xs text-gray-500 text-end">5 Days ago</p>
              </div>
              <div className="text-small border-b-1 py-1 rounded-md bg-gray-200 p-2 cursor-pointer">
                Kamu telah berhasil membuat jadwal konsultasi dengan psikolog{" "}
                <span className="font-bold">Junthau Hans William</span>
                <p className="text-xs text-gray-500 text-end">7 Days ago</p>
              </div>
              <div className="text-small border-b-1 py-1 rounded-md bg-gray-200 p-2 cursor-pointer">
                Mood kamu lagi jelek hari ini, semangat ya !!
                <p className="text-xs text-gray-500 text-end">9 Days ago</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Mood Tracking</DropdownItem>
            <DropdownItem key="team_settings">History</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
