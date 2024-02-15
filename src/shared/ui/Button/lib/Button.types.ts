import { ReactNode } from 'react';

export interface ButtonProps {
  color: 'inverted';
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}
