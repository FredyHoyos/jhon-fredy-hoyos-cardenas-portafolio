import React from 'react';

type IconProps = {
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ component: Component, className }) => {
  return <Component className={className} />;
};

export default Icon;