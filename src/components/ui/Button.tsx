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

const sizeStyle: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '13px 22px', fontSize: 14 },
  md: { padding: '14px 24px', fontSize: 14 },
  lg: { padding: '15px 26px', fontSize: 15 },
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
  const className = variantClass[variant];
  const composed: CSSProperties = {
    ...sizeStyle[size],
    ...(fullWidth ? { width: '100%' } : null),
    ...style,
  };

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={className} style={composed}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={className}
      style={composed}
    >
      {children}
    </button>
  );
}
