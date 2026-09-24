import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AppleLogo } from './AppleLogo';

interface AppleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  full?: boolean;
  className?: string;
}

export const AppleButton: React.FC<AppleButtonProps> = ({
  label = 'Download Aura',
  full = false,
  className = '',
  ...props
}) => {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${
        full ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      <AppleLogo className="w-4 h-4 text-black" />
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
    </button>
  );
};

export default AppleButton;
