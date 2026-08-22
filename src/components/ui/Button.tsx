import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'gold' | 'blue' | 'outlineLight' | 'outlineBlue';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variantClass: Record<ButtonVariant, string> = {
  gold: 'hy-btn hy-btn-gold',
  blue: 'hy-btn hy-btn-blue',
  outlineLight: 'hy-btn hy-btn-outline-light',
  outlineBlue: 'hy-btn hy-btn-outline-blue',
};

const sizeClass: Record<ButtonSize, string> = {
  sm: 'py-[13px] px-[22px] text-[14px]',
  md: 'py-[14px] px-6 text-[14px]',
  lg: 'py-[15px] px-[26px] text-[15px]',
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  style?: CSSProperties;
  fullWidth?: boolean;
}

interface LinkButtonProps extends CommonProps {
  to: string;
  onClick?: never;
  type?: never;
}

interface ActionButtonProps extends CommonProps {
  to?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'gold', size = 'md', children, style, fullWidth } = props;
  const className = `${variantClass[variant]} ${sizeClass[size]}${fullWidth ? ' w-full' : ''}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={className} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
