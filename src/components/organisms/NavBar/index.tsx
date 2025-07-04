import { useState } from "react";
import { Menu, X } from "lucide-react";

const Index = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función que alterna el estado del menú (abrir/cerrar)
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función que cierra el menú (usada al hacer clic en un enlace)
  const closeMenu = () => setIsOpen(false);

  return (
    // Contenedor del navbar, fijo arriba, con fondo difuminado y sombra
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-transparent shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 md:py-1">
        {/* Título o logo del menú */}
        <span className="text-lg font-bold text-gray-800">Currículum</span>
        
        {/* Botón hamburguesa visible solo en pantallas pequeñas (md:hidden) */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {/* Ícono cambia entre menú (≡) o cruz (X) según el estado */}
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Lista de enlaces del menú */}
      <ul
        className={`
          md:mb-2 flex flex-col items-center
          md:flex-row md:justify-center md:items-center
          space-y-4 md:space-y-0 md:space-x-6
          px-4 md:px-0 pb-4 md:pb-0
          text-sm font-semibold text-gray-800
          transition-all duration-300 ease-in-out
          ${isOpen ? "block" : "hidden"} md:flex
        `}
      >
        {/* Cada enlace cierra el menú al hacer clic */}
        <li>
          <a href="#target" onClick={closeMenu} className="hover:text-primary transition">
            Presentación
          </a>
        </li>
        <li>
          <a href="#knowledge" onClick={closeMenu} className="hover:text-primary transition">
            Conocimientos
          </a>
        </li>
        <li>
          <a href="#education" onClick={closeMenu} className="hover:text-primary transition">
            Educación
          </a>
        </li>
        <li>
          <a href="#certification" onClick={closeMenu} className="hover:text-primary transition">
            Certificación
          </a>
        </li>
        <li>
          <a href="#portafolio" onClick={closeMenu} className="hover:text-primary transition">
            Portafolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu} className="hover:text-primary transition">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Index;

