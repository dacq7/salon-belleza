import { Facebook, Instagram, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light py-10 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/logo.png"
              alt="Logo Glamour"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-brand-secondary">
              Glamour
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Tu salón de belleza de confianza. Estilo, cuidado y glamour en cada
            visita.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-secondary">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#servicios" className="hover:text-brand-secondary">
                Servicios
              </a>
            </li>
            <li>
              <a href="#equipo" className="hover:text-brand-secondary">
                Equipo
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-brand-secondary">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-brand-secondary">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-secondary">
            Síguenos
          </h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-secondary"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-secondary"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-secondary"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Glamour. Todos los derechos reservados.
      </div>
    </footer>
  );
};

