import { allColors } from './allColors';
import { tileColors } from './tileColors';

// Colors with a purpose.  These colors will corrospond to specific css and layout targets.
// Note: There will likely be lots of duplicates, this is expected (the same color can/will be used for multiple elements)

export const Colors = {
  // Font
  FONT_LINK: allColors.BLUE_LIGHT,
  FONT_LINK_VISITED: allColors.BLUE_PRIMARY,
  FONT_PRIMARY: allColors.GRAY_DARKER,
  FONT_TITLE_INFO: allColors.GRAY_PRIMARY,
  FONT_DISABLED: allColors.GRAY_LIGHTER,
  FONT_WHITE: allColors.WHITE,
  // Header
  HEADER_BACKGROUND: allColors.GRAY_DARK,
  HEADER_FONT: allColors.WHITE,
  // Background
  BACKGROUND_MAIN: allColors.GRAY_DARKEST,
  BACKGROUND_CONTENT: allColors.GRAY_DARKER,
  BACKGROUND_LIGHT: allColors.GRAY_LIGHTEST,
  // Button
  BUTTON_BACKGROUND: allColors.BLUE_PRIMARY,
  BUTTON_HOVER: allColors.BLUE_LIGHT,
  BUTTON_ACTIVE: allColors.BLUE_DARK,
  BUTTON_FOCUS: allColors.BLUE_PRIMARY,
  BUTTON_OUTLINE: allColors.BLUE_LIGHTER,
  BUTTON_BORDER: allColors.BLUE_PRIMARY,
  BUTTON_FONT: allColors.WHITE,
  BUTTON_FONT_PRIMARY_DISABLED: allColors.WHITE,
  BUTTON_FONT_SECONDARY_DISABLED: allColors.GRAY_LIGHTER,
  BUTTON_DISABLED: allColors.GRAY_LIGHTER,
  BUTTON_FONT_PRIMARY: allColors.WHITE,
  BUTTON_FONT_SECONDARY: allColors.BLUE_DARK,
  // Border
  BORDER_PRIMARY: allColors.GRAY_LIGHT,
  // Dropdown
  DROPDOWN_BORDER: allColors.GRAY_LIGHTER,
  DROPDOWN_BACKGROUND: allColors.GRAY_LIGHTEST,
  DROPDOWN_FONT_COLOR: allColors.GRAY_DARK,
  // Card
  CARD_BACKGROUND: allColors.WHITE,
  CARD_FONT: allColors.GRAY_DARKEST,
  CARD_BORDER: allColors.GRAY_LIGHTER,
  // Icon
  ICON_PRIMARY: allColors.BLUE_PRIMARY,
  ICON_SECONDARY: allColors.WHITE,
  ICON_DISABLED: allColors.GRAY_PRIMARY,
  ICON_FIGURE: allColors.PURPLE_PRIMARY,
  ICON_PROVENANCE: allColors.BLUE_PRIMARY,
  // Toggle
  TOGGLE_ACTIVE: allColors.BLUE_PRIMARY,
  TOGGLE_FONT: allColors.WHITE,
  TOGGLE_BACKGROUND: allColors.BLUE_DARKER,
  // Radio
  RADIO_CENTER: allColors.WHITE,
  RADIO_ACTIVE: allColors.BLUE_PRIMARY,
  RADIO_INACTIVE: allColors.TRANSPARENT,
  RADIO_DISABLED: allColors.GRAY_LIGHTER,
  // Alert
  ALERT_WARNING: allColors.YELLOW_LIGHT,
  ALERT_WARNING_COLOR: allColors.GRAY_DARKEST,
  ALERT_ERROR: allColors.RED_PRIMARY,
  ALERT_ERROR_COLOR: allColors.WHITE,
  // Popup
  POPUP_BACKGROUND: allColors.BLUE_PRIMARY,
  // List
  LIST_BORDER: allColors.GRAY_LIGHTER,
  // Colors by name
  FIGURE_PURPLE: allColors.PURPLE_PRIMARY,
  FIGURE_PURPLE_DARK: allColors.PURPLE_DARK,
  // Input
  INPUT_BORDER: allColors.GRAY_LIGHTER,
  // Tile
  TILE_BACKGROUND: allColors.GRAY_DARKER,
  TILE_BACKGROUND_LIGHT: allColors.GRAY_DARK,

  // All other colors
  ...allColors,
  ...tileColors,
};
