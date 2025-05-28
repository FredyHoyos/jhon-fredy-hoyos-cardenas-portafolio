import React from 'react';

// Definición del tipo de las props que acepta el componente Icon
type IconProps = {
  // `component` es un componente funcional de React que representa un SVG
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  // `className` es opcional y permite aplicar estilos CSS
  className?: string;
};

// Componente funcional que renderiza dinámicamente un ícono SVG
const Icon: React.FC<IconProps> = ({ component: Component, className }) => {
  // Renderiza el componente SVG con la clase CSS proporcionada
  return <Component className={className} />;
};

export default Icon;
