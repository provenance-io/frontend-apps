import { allColors } from './allColors';

// Colors with a purpose.  These colors will corrospond to specific css and layout targets.
// Note: There will likely be lots of duplicates, this is expected (the same color can/will be used for multiple elements)

export const Colors = {
  // Font
  FONT_LINK: allColors.BLUE_PRIMARY,
  FONT_PRIMARY: allColors.WHITE,
  // Sidebar Menu
  MENU_BG: allColors.GREY_DARKER, 
  MENU_ITEM_BG: allColors.BLUE_MUTED_DARKEST,
  MENU_ITEM_ACTIVE_BG: allColors.BLUE_MUTED_DARK,
  // Body
  BODY_BG: allColors.GREY_DARKEST,
  // Border
  BORDER_PRIMARY: allColors.GREY_LIGHTEST, 
  // Button
  BUTTON_BG: allColors.BLUE_MUTED_DARK,
  BUTTON_HOVER: allColors.BLUE_MUTED_DARKER,
  BUTTON_COLOR: allColors.WHITE,
  // Icon
  ICON_PRIMARY: allColors.BLUE_MUTED_LIGHT,
  ICON_LIGHT: allColors.WHITE,
  ICON_DARK: allColors.WHITE20, 
  // Tile
  TILE_BG: allColors.GREY_DARK,
  TILE_BORDER: allColors.WHITE20, 

  // All other colors
  ...allColors,
};
