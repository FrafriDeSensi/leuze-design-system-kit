import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Il brand book usa "Primary / Secondary / Ghost" — non "default/outline/text" */
  variant?: ButtonVariant;
}

/**
 * Bottone Leuze.
 * Regola del brand book: il colore di default è SEMPRE rosso, indipendentemente
 * dalla variante. Non esiste una variante blu/nera/grigia del bottone.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`leuze-btn leuze-btn--${variant} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
