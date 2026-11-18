/* Separate from index.js so project files can import it without a cycle. */

/** An imported screen with its intrinsic size, so images reserve their space. */
export const shot = (src, w, h, alt = '') => ({ src, w, h, alt });

/* Sizes the asset pipeline writes: phones at 720w, wide captures at 1800w. */
export const phone = (src, alt) => shot(src, 720, 1562, alt);
export const wide = (src, alt, h = 1125) => shot(src, 1800, h, alt);
