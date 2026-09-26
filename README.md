# Thesis sPHENIX

An offline, layered explorer of Sijan Regmi's 2026 Ohio University dissertation.

## Open

Double-click `index.html`, or run `python3 -m http.server 8765 --bind 127.0.0.1` in this folder and open http://127.0.0.1:8765.

No installation, build step, account, or internet connection is required. Keep the HTML, JavaScript, CSS, and assets folder together. Your thesis is bundled in `assets/thesis.pdf`.

## Explore

- **Explore:** chapter → topic → method → key idea, with breadcrumbs and Up one level.
- **Outline:** expand individual branches, or expand/collapse the entire current branch.
- **Figures:** original, cropped thesis figures for the selected chapter and its descendants. Click to enlarge; use Zoom in for small labels.
- **Search:** search titles, core phrases, and selected figure numbers. Press `/` to focus; use arrows and Enter to navigate results.
- **Read in thesis:** open the corresponding original page in the built-in reader, with previous/next controls and a page selector. “Open in new tab” opens the full PDF.
- Browser Back/Forward restore the topic and view; URLs can bookmark any branch.

Introduction, theory, and experimental setup are intentionally brief. Similar plot series are represented by one example, while all original material remains in the PDF. Appendix F contains only Figure F.8. The classifier is identified as a simulation study, and the PHENIX normalization caveat is retained.

## Content and source

- `data.js`: curated hierarchy and concise summaries; `page` is the printed dissertation page (also the PDF page index in this document).
- `figures.js`: figure titles, page references, captions, and image paths.
- `scripts/extract_figures.py`: reproducible extraction from original PDF image bounds, rendered with Poppler and cropped with Pillow. Requires Python pdfplumber/Pillow and pdftoppm, only if regenerating images.
- The original figure credits and reproduction permissions remain in the source PDF and Appendix G. Extracted figures are not newly generated plots.

Source: https://etd.ohiolink.edu/acprod/odb_etd/r/etd/search/10?p10_accession_num=ohiou1787138213251974&clear=10
