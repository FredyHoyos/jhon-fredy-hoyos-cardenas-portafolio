'use client'; // Directiva para habilitar el comportamiento del lado del cliente en Next.js

import { useState } from 'react';
import { X } from 'lucide-react';

// Colores disponibles para cambiar el color primario de la interfaz
const colorOptions = [
  '#0723c2', '#ff5733', '#28a745', '#ffc107', '#6f42c1', '#00bcd4',
];

// Colores disponibles para cambiar el fondo del cuerpo de la página
const backgroundOptions = [
  '#acd7df', '#f8f9fa', '#f0e68c', '#d1c4e9', '#ffe4e1', '#e3f2fd',
];

// Componente que permite al usuario personalizar el color primario y de fondo de la UI
const ColorPickerModal = () => {
  // Estado para controlar si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función que actualiza una variable CSS personalizada en el root HTML
  const updateColor = (varName: string, value: string) => {
    document.documentElement.style.setProperty(varName, value);

    // Si se está cambiando el fondo, también se actualiza directamente el body
    if (varName === 'background-color') {
      document.body.style.backgroundColor = value;
    }
  };

  return (
    <>
      {/* Botón para abrir el modal de personalización */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary border-2 hover:border-green-400 transition-transform duration-300 hover:scale-110 text-white py-2 px-6 rounded"
      >
        Personalizar colores
      </button>

      {/* Modal con opciones de personalización */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative space-y-6">
            
            {/* Botón para cerrar el modal */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            {/* Selector de color primario */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Color primario</h2>
              <div className="flex gap-2 flex-wrap">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => updateColor('--color-primary', color)}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:scale-110 transition"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Selector de fondo de pantalla */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Fondo de pantalla</h2>
              <div className="flex gap-2 flex-wrap">
                {backgroundOptions.map((bg) => (
                  <button
                    key={bg}
                    onClick={() => updateColor('background-color', bg)}
                    className="w-8 h-8 rounded-full border-2 border-gray-300 hover:scale-110 transition"
                    style={{ backgroundColor: bg }}
                    title={bg}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorPickerModal;
