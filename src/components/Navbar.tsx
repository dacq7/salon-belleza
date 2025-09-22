import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

// 👉 Ahora incluye la sección Precios
const routeList: RouteProps[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-brand-dark/80 backdrop-blur-md">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          {/* Logo + Nombre */}
          <NavigationMenuItem className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Logo Salón Glamour"
                className="h-10 w-auto"
              />
              <span className="font-display text-xl text-brand-secondary">
                Glamour
              </span>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="h-6 w-6 text-white"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>
              <SheetContent side="left" className="bg-brand-dark text-white">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-brand-secondary">
                    Glamour
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-start gap-4 mt-6">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-6 items-center">
            {routeList.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-semibold hover:text-brand-secondary transition`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-primary text-sm"
            >
              Reserva tu cita
            </a>
            <ModeToggle />
          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};


