import { ReactNode } from 'react';

export interface TypographyProps {
  variant: 'Title 1' | 'Title 2' | 'Title 3' | 'Body';
  color?: 'tertiary' | 'primary' | 'secondary';
  weight: 'bold' | 'medium' | 'regular';
  children: ReactNode;
  className?: string;
}
