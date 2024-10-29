import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Consult", path: "/consult" },
  ];

  return (
    <Navbar isBordered
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
        base: "p-5 bg-white",
      }}
    >
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} width={150} alt="ConsultMe" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-14" justify="center">
        {menuItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <NavbarItem key={item.path} isActive={isActive}>
              <Link
                className={`text-medium ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
                href={item.path}
              >
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-medium">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
