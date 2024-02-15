import { FC } from 'react';
import { ButtonProps, buttonColors } from './lib';

const Button: FC<ButtonProps> = ({ color, children, disabled }) => {
  return (
    <button className={`w-full p-4 rounded-xl ${buttonColors[color]}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
