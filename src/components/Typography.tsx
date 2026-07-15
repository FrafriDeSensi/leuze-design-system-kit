import React from 'react';
import './Typography.css';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TypeProps extends React.HTMLAttributes<HTMLElement> {
  as?: Tag;
  children: React.ReactNode;
}

export const H1: React.FC<TypeProps> = ({ as = 'h1', className = '', ...rest }) =>
  React.createElement(as, { className: `leuze-h1 ${className}`, ...rest });

export const H2: React.FC<TypeProps> = ({ as = 'h2', className = '', ...rest }) =>
  React.createElement(as, { className: `leuze-h2 ${className}`, ...rest });

export const H3: React.FC<TypeProps> = ({ as = 'h3', className = '', ...rest }) =>
  React.createElement(as, { className: `leuze-h3 ${className}`, ...rest });

export const Body: React.FC<TypeProps> = ({ as = 'p', className = '', ...rest }) =>
  React.createElement(as, { className: `leuze-body ${className}`, ...rest });

export const Label: React.FC<TypeProps> = ({ as = 'span', className = '', ...rest }) =>
  React.createElement(as, { className: `leuze-label ${className}`, ...rest });
