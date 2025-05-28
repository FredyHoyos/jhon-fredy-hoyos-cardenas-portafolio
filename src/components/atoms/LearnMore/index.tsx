import { useState } from 'react';
import { X } from 'lucide-react'; // Ícono de cierre (X) desde la librería Lucide

// Componente que muestra un botón que abre un modal con información personal
const AboutModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del modal

  return (
    <>
      {/* Botón que abre el modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary border-2 hover:border-green-400 transition-transform duration-300 hover:scale-110 text-white py-2 px-6 rounded"
      >
        Más de mí →
      </button>

      {/* Modal (solo se muestra si isOpen es true) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          {/* Contenedor del contenido del modal */}
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
            
            {/* Botón para cerrar el modal */}
            <button
              className="absolute top-4 right-20 text-gris hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Título del modal */}
            <h2 className="text-2xl font-bold mb-4 text-primary">Más sobre mí</h2>

            {/* Primer párrafo descriptivo */}
            <p className="text-gris mb-3 leading-relaxed">
              Soy una persona apasionada por la tecnología y el desarrollo de software, actualmente cursando séptimo semestre de Ingeniería de Sistemas en la Universidad de Antioquia. Me gusta mucho el desarrollo Full-Stack tanto el frontend como backend. Tengo un enfoque particular en la automatización de procesos. En mis tiempos libres me gusta hacer ejercicio, tocar la guitarra y trabajar en proyectos personales que me permitan seguir aprendiendo y creciendo profesionalmente.
            </p>

            {/* Segundo párrafo descriptivo */}
            <p className="text-gris">
              Me destaco por mi compromiso, adaptabilidad, y enfoque en la mejora continua de mis habilidades técnicas y blandas. Quiero seguir aprendiendo y creciendo en el campo 
              del desarrollo de software, y me emociona poder participar en nuevos proyectos que me permitan mejorar y aportar valor.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutModal;
