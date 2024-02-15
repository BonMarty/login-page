import { FC, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputProps } from './lib/Input.types';

const Input: FC<InputProps> = ({ value, onChange, placeholder, type, isPassword }) => {
  const [isSecure, setIsSecure] = useState(true);

  if (isPassword) {
    return (
      <label className="relative">
        <input
          className="w-full p-4 border border-lines rounded-xl font-medium placeholder:text-secondary placeholder:font-medium"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={isSecure ? type : 'text'}
        />
        {isSecure ? (
          <span className="absolute top-0 right-4 w-5 h-full flex justify-center items-center">
            <FiEyeOff
              className="w-5 h-5 text-secondary cursor-pointer"
              onClick={() => setIsSecure(false)}
            />
          </span>
        ) : (
          <span className="absolute top-0 right-4 w-5 h-full flex justify-center items-center">
            <FiEye
              className="w-5 h-5 text-secondary cursor-pointer"
              onClick={() => setIsSecure(true)}
            />
          </span>
        )}
      </label>
    );
  } else {
    return (
      <label>
        <input
          className="w-full p-4 border border-lines rounded-xl font-medium placeholder:text-secondary placeholder:font-medium"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      </label>
    );
  }
};

export default Input;
