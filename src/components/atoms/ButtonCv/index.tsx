import React from 'react';
import { Download } from 'lucide-react';

const DownloadCV = () => {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="/CV-JhonFredyHoyos.pdf"
        download
        className="inline-flex items-center bg-primary border-2 hover:border-green-400 transition-transform duration-300 hover:scale-110  text-white py-2 px-6 rounded"
      >
        <Download className="w-5 h-5 mr-2" />
        Descargar CV
      </a>
    </div>
  );
};

export default DownloadCV;