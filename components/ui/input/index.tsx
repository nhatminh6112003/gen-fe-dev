'use client';

import AnimationContainer from '@/components/utils/AnimationContainer';

interface Props {
  placeholder: string;
  value: any;
  onChange: (arg?: any) => void;
  type?: string;
}

export default function Input({
  placeholder,
  value,
  onChange,
  type = 'text'
}: Props) {
  return (
    <AnimationContainer horizontal>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="text-sm md:text-base p-3 border w-full outline-none focus-within:border-secondary"
        placeholder={placeholder}
      />
    </AnimationContainer>
  );
}
