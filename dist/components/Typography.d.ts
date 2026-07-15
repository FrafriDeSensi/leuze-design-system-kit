import { default as React } from 'react';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';
interface TypeProps extends React.HTMLAttributes<HTMLElement> {
    as?: Tag;
    children: React.ReactNode;
}
export declare const H1: React.FC<TypeProps>;
export declare const H2: React.FC<TypeProps>;
export declare const H3: React.FC<TypeProps>;
export declare const Body: React.FC<TypeProps>;
export declare const Label: React.FC<TypeProps>;
export {};
