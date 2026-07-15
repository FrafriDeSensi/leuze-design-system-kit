import { default as React } from 'react';

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
export declare const Button: React.FC<ButtonProps>;
