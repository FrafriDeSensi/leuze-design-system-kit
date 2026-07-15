import { default as React } from 'react';

export type GraySurfaceVariant = 'top' | 'side';
export interface GraySurfaceProps {
    /**
     * "top": la superficie grigia riempie il layout dall'alto, l'immagine
     *   sfuma dentro l'area grigia, il bianco forma il piede.
     * "side": la superficie grigia divide il layout, l'immagine occupa
     *   interamente il lato grigio e "sfonda" nel bianco.
     */
    variant: GraySurfaceVariant;
    eyebrow?: string;
    title: string;
    body?: string;
    imageSrc: string;
    imageAlt: string;
    cta?: React.ReactNode;
}
/**
 * Elemento di firma visiva Leuze (rif. brand book 3.4 "Layoutsystem").
 * Non è un pattern decorativo: è la regola con cui Leuze distingue
 * i propri layout da qualunque altro sito industriale.
 */
export declare const GraySurface: React.FC<GraySurfaceProps>;
