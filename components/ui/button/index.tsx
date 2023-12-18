import React, { HTMLProps, useMemo } from 'react';
interface ButtonProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  variant?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  rounded?: 'sm' | 'lg' | 'xl';
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = useMemo(() => {
    const getSize = () => {
      switch (size) {
        case 'small':
          return 'lg:px-4 lg:py-2  px-2 py-1.5';

        case 'medium':
          return 'lg:px-6 lg:py-3 px-3 py-1.5';

        case 'large':
          return 'px-8 lg:py-4 py-3.5';
      }
    };

    let initClass = `w-fit  rounded-full text-white text-lg whitespace-nowrap ${
      variant === 'primary'
        ? 'bg-gradient-to-b from-[#A975A2] to-[#8E4A86]'
        : 'bg-secondary'
    }  ${getSize()}`;

    return initClass;
  }, [size, variant]);

  return (
    <div role="button" className={`text-xl ${mode} ${className} `} {...props}>
      <p>{label}</p>
    </div>
  );
};
export default Button;
