import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950';

  const variantStyles = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-lg hover:shadow-glow',
    secondary:
      'bg-secondary-500 text-neutral-950 hover:bg-secondary-600 active:bg-secondary-700 shadow-lg hover:shadow-glow-cyan',
    outline:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600',
    ghost:
      'text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const styles = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

// Badge component
interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary-500/20 text-primary-300 border border-primary-500/50',
    secondary: 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/50',
    accent: 'bg-accent-purple/20 text-accent-purple text-opacity-100 border border-accent-purple/50',
  };

  return (
    <span
      className={clsx(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

// Highlight component for text
interface HighlightProps {
  children: ReactNode;
  className?: string;
}

export function Highlight({ children, className = '' }: HighlightProps) {
  return (
    <span className={clsx('text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400', className)}>
      {children}
    </span>
  );
}
