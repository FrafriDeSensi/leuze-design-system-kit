# Leuze Electronic — Guidelines per Figma Make

Questo pacchetto (`@leuze/design-system`) contiene i componenti reali del brand
Leuze. Usa SEMPRE questi componenti e questi token al posto di stili generati
o approssimati.

## Gerarchia colore (obbligatoria)

1. **Superficie primaria = Leuze Grau (`#e8ebf0`)**, non bianco. Il bianco è
   riservato a respiro/contrasto, non è lo sfondo di default delle sezioni.
2. **Rosso (`#e30613`) solo per interazione**: bottoni, link attivi, eyebrow/
   label. Non usarlo mai come colore di sfondo di sezione o come colore
   decorativo di grandi superfici.
3. **Nero solo per la tipografia.** Non usare il nero come colore di sfondo,
   tranne in blocchi editoriali espliciti (es. footer, banner newsletter).
4. Le tre gradazioni di grigio (`Grauabstufung 01/02/03`) servono per
   gerarchia e profondità (card su sfondo grigio, bordi, stati disabilitati),
   non come palette libera.

## Errori da NON commettere

- Non inventare bottoni "outline nero" o "outline blu": il bottone ha sempre
  il rosso come colore, cambia solo la variante (`primary` / `secondary` /
  `ghost`), mai il colore.
- Non usare border-radius arbitrari: le immagini/box grandi sono sempre
  42px, i bottoni sempre 12px. Nessun altro valore.
- Non usare font diversi da Helvetica Neue LT Pro per titoli/testo.
- Non introdurre gradienti, ombre colorate, o glow — non fanno parte del
  linguaggio visivo Leuze.
- Non usare layout "hero centrato con card a griglia 3 colonne uguali":
  è il pattern generico da evitare. Usa `GraySurface` (variante `top` o
  `side`) come blocco editoriale principale.

## Componente firma: `GraySurface`

Questo è l'elemento che rende un layout riconoscibile come Leuze e non come
un sito industriale generico. Due varianti, documentate nel brand book
(sez. 3.4 "Layoutsystem"):

- `variant="top"`: l'area grigia riempie il layout dall'alto, l'immagine
  "sfonda" leggermente il confine verso il basso, il bianco chiude in
  basso come piede.
- `variant="side"`: l'area grigia divide il layout in verticale, l'immagine
  occupa interamente il lato grigio.

Usa questo componente per almeno un blocco per pagina (tipicamente
l'apertura o una sezione "prodotto/tecnologia"). Non ripeterlo in modo
identico più di 2 volte nella stessa pagina — variare `top`/`side`.

## Componenti disponibili

| Componente | Uso |
|---|---|
| `Button` | CTA, varianti `primary`/`secondary`/`ghost` |
| `GraySurface` | Blocco editoriale con immagine, firma visiva del brand |
| `H1`, `H2`, `H3`, `Body`, `Label` | Tipografia con scala fissa del brand book |

## Nota aperta da verificare con il team brand

Il brand book riporta "Label – 75 pt" nella scala tipografica, ma 75 è
altrove usato come peso (Helvetica 75 Bold), non come dimensione in punti.
In questo pacchetto ho impostato Label a 14pt/bold come valore provvisorio
plausibile — da confermare con chi ha scritto il brand book prima di
considerarlo definitivo.
