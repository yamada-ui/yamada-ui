// ======== Button ========
const buttonDeprecatedMap: {
  [key: string]: { newProp: string; note?: string }
} = {
  isDisabled: {
    newProp: "disabled",
    note: "Use 'disabled' instead of 'isDisabled' (Button)",
  },
  leftIcon: {
    newProp: "startIcon",
    note: "Use 'startIcon' instead of 'leftIcon' (Button)",
  },
  rightIcon: {
    newProp: "endIcon",
    note: "Use 'endIcon' instead of 'rightIcon' (Button)",
  },
}

// ======== IconButton ========
const iconButtonDeprecatedMap: {
  [key: string]: { newProp: string; note?: string }
} = {
  iconSize: {
    newProp: "size",
    note: "Use 'size' instead of 'iconSize' (IconButton)",
  },
  isRound: {
    newProp: "circular",
    note: "Use 'circular' instead of 'isRound' (IconButton)",
  },
}

// -------------------------------------------------------------------------
// Merge all deprecated maps
// -------------------------------------------------------------------------
export const deprecatedMap: {
  [key: string]: { newProp: string; note?: string }
} = {
  ...buttonDeprecatedMap,
  ...iconButtonDeprecatedMap,
}
