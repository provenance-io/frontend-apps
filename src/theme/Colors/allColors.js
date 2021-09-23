// Every possible color in the app based on the generic name of the color
// Each generic name will have 7 possible variations: lightest, lighter, light, primary, dark, darker, and darkest.
// Note: Not every variant will be getting used and these are mainly a guideline, we shouldn't need more than 7 of each generic color

export const allColors = {
  // -------------
  // Transparent
  // -------------
  TRANSPARENT: 'rgba(0,0,0,0)',
  // -------------
  // White
  // -------------
  WHITE: '#FFFFFF',
  WHITE20: 'rgba(255, 255, 255, 0.20)',
  // -------------
  // Black
  // -------------
  BLACK: '#000000',
  BLACK95: 'rgba(0,0,0, 0.95)',
  BLACK30: 'rgba(0,0,0, 0.30)',
  BLACK25: 'rgba(0,0,0, 0.25)',
  BLACK13: 'rgba(0,0,0, 0.13)',
  BLACK10: 'rgba(0,0,0, 0.10)',
  // -------------
  // Grey
  // -------------
  GREY_LIGHTEST: '#F9F9F9', // [Unnamed in designs]
  GREY_LIGHTER: '#F0F2F8', // Dark Grey
  // GREY_LIGHT: '#000000', // [TBD]
  GREY_PRIMARY: '#1F222E', // Midnight
  GREY_DARK: '#191C27', // Background
  GREY_DARKER: '#141821', // [Unnamed in designs]
  GREY_DARKEST: '#131721', // [Unnamed in designs]
  // -------------
  // Blue Color
  // -------------
  // BLUE_LIGHTEST: '#000000', // [TBD]
  // BLUE_LIGHTER: '#000000', // [TBD]
  // BLUE_LIGHT: '#000000', // [TBD]
  BLUE_PRIMARY: '#498AFD', // [Custom Link Blue]
  // BLUE_DARK: '#000000', // [TBD]
  // BLUE_DARKER: '#000000', // [TBD]
  // BLUE_DARKEST: '#000000', // [TBD]
  // -------------
  // Blue Muted
  // -------------
  // BLUE_MUTED_LIGHTEST: '#000000', // [TBD]
  // BLUE_MUTED_LIGHTER: '#000000', // [TBD]
  BLUE_MUTED_LIGHT: '#C8D4F1', // Sky
  BLUE_MUTED_PRIMARY: '#9EAAC7', // Light Grey
  BLUE_MUTED_DARK: '#39456B', // Steel
  BLUE_MUTED_DARKER: '#383E55', // Grey
  BLUE_MUTED_DARKEST: '#292D3E', // Dark Grey
};
