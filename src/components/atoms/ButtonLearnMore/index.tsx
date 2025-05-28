import React from 'react';
import Arrow from '@/assets/svg/arrowMore.svg';

interface Props {
  text: string;
  url?: string;
}

//Botón para enviar a una URL especificada
const Index = ({ text, url }: Props) => {
  const content = (
    <span className="text-primary text-[18px] transition-transform duration-300 hover:scale-110 inline-flex items-center gap-1">
      {text} <Arrow className="inline-block" />
    </span>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      {content}
    </a>
  ) : (
    <div className="cursor-pointer">
      {content}
    </div>
  );
};

export default Index;
