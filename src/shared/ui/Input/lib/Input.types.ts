import { ChangeEvent } from 'react';

export interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isPassword?: boolean;
  type: 'text' | 'email' | 'password';
}
