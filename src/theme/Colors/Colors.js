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
  MENU_LINE: allColors.BLUE_MUTED_LIGHT,
  // Body
  BODY_BG: allColors.GREY_DARKEST,
  // Border
  BORDER_PRIMARY: allColors.GREY_LIGHTEST, 
  // Button
  BUTTON_BG: allColors.TRANSPARENT,
  BUTTON_BORDER: allColors.BLUE_PRIMARY,
  BUTTON_BORDER_HOVER: allColors.WHITE,
  BUTTON_HOVER: allColors.TRANSPARENT,
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
