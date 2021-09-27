export const sizes = {
  xl: 1920, // [ 1920px - ∞ ]
  lg: 1280, // [ 1280px - 1919px ]
  md: 960, // [ 960px - 1279px ]
  sm: 600, // [ 600 - 959px ]
  xs: 0, // [ 0 - 599px ]
};

// ----------------------
// Media methods (CSS)
// ----------------------
// Exact size and above/greater, eg: 960 - ∞
const upMedia = (size) => `(min-width: ${sizes[size]}px)`;
// Exact size and below/less, eg: 1280 - 0 px
const downMedia = (size) => `(max-width: ${sizes[size]}px)`;
// Exactly one size, eg: 600px
const onlyMedia = (size) => `(min-width: ${sizes[size]}px) and (max-width: ${sizes[size]}px)`;
// Between two sizes, eg: 600px-1280px
const betweenMedia = (min, max) => `(min-width: ${sizes[min]}px) and (max-width: ${sizes[max] - 1}px)`;
// --------------------
// Size methods (JS)
// --------------------
const { width = 1200 } = window?.screen;
const upSize = (size) => width >= sizes[size];
const downSize = (size) => width <= sizes[size];
const onlySize = (size) => width === sizes[size];
const betweenSize = (min, max) => width >= sizes[min] && width <= sizes[max];


export const breakpoints = {
  media: {
    up: upMedia,
    down: downMedia,
    only: onlyMedia,
    between: betweenMedia,
  },
  size: {
    up: upSize,
    down: downSize,
    only: onlySize,
    between: betweenSize,
  },
};
