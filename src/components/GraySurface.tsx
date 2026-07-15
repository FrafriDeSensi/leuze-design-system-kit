import React from 'react';
import './GraySurface.css';

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
export const GraySurface: React.FC<GraySurfaceProps> = ({
  variant,
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  cta,
}) => {
  return (
    <div className={`leuze-graysurface leuze-graysurface--${variant}`}>
      <div className="leuze-graysurface__image-wrap">
        <img className="leuze-graysurface__image" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="leuze-graysurface__content">
        {eyebrow && <span className="leuze-graysurface__eyebrow">{eyebrow}</span>}
        <h3 className="leuze-graysurface__title">{title}</h3>
        {body && <p className="leuze-graysurface__body">{body}</p>}
        {cta && <div className="leuze-graysurface__cta">{cta}</div>}
      </div>
    </div>
  );
};
