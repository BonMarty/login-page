import { FC } from 'react';
import { TypographyProps, typographyColors, typographyWeights } from './lib';

const Typography: FC<TypographyProps> = ({ variant, color, weight, children, className }) => {
  if (variant === 'Title 1') {
    return (
      <h1
        className={`text-[32px] ${color ? typographyColors[color] : 'text-primary'} ${
          typographyWeights[weight]
        } ${className ? className : ''}`}>
        {children}
      </h1>
    );
  }

  if (variant === 'Title 2') {
    return (
      <h2
        className={`text-[24px] ${color ? typographyColors[color] : 'text-primary'} ${
          typographyWeights[weight]
        } ${className ? className : ''}`}>
        {children}
      </h2>
    );
  }

  if (variant === 'Title 3') {
    return (
      <h3
        className={`text-[17px] ${color ? typographyColors[color] : 'text-primary'} ${
          typographyWeights[weight]
        } ${className ? className : ''}`}>
        {children}
      </h3>
    );
  }

  if (variant === 'Body') {
    return (
      <p
        className={`text-[15px] ${color ? typographyColors[color] : 'text-primary'} ${
          typographyWeights[weight]
        } ${className ? className : ''}`}>
        {children}
      </p>
    );
  }
};

export default Typography;
