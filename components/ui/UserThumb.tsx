import { FC } from 'react';
import Image from 'next/image';

type DivProps = Omit<React.HTMLProps<HTMLDivElement>, 'size'>;

interface UserThumbProps extends DivProps {
  size: 'm' | 'l' | 's';
  className?: string;
  image: string; // New prop for the image URL
}

const UserThumb: FC<UserThumbProps> = ({
  size,
  className,
  image,
  ...props
}) => {
  const baseClasses =
    'bg-center bg-cover rounded-full absolute overflow-hidden'; // Added overflow-hidden to ensure the image stays within the circle
  const sizeClasses = {
    l: 'md:h-24 md:w-24 h-16 w-16',
    m: 'md:h-12 md:w-12 h-10 w-10',
    s: 'h-8 w-8'
  };

  return (
    <div className={`${baseClasses}  ${className}`} {...props}>
      <Image
        src={image}
        height={120}
        width={120}
        className={`${sizeClasses[size]}`}
        alt="User Thumbnail"
      />
    </div>
  );
};

export default UserThumb;
