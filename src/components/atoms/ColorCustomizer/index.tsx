'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

const colorOptions = [
  '#0723c2', '#ff5733', '#28a745', '#ffc107', '#6f42c1', '#00bcd4',
];
const backgroundOptions = [
  '#acd7df', '#f8f9fa', '#f0e68c', '#d1c4e9', '#ffe4e1', '#e3f2fd',
];

const ColorPickerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const updateColor = (varName: string, value: string) => {
    document.documentElement.style.setProperty(varName, value);
    if (varName === 'background-color') {
      document.body.style.backgroundColor = value;
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary border-2 hover:border-green-400 transition-transform duration-300 hover:scale-110  text-white py-2 px-6 rounded"
      >
        Personalizar colores
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative space-y-6">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

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
