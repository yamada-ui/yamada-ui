import type { ThemeSemantics } from "../core"

export const semantics: ThemeSemantics = {
  colors: {
    danger: "red.500",
    info: "blue.500",
    link: "blue.500",
    muted: ["#656565", "#b3b3b3"],
    primary: "blue.500",
    secondary: "violet.500",
    success: "green.500",
    warning: "orange.500",
  },
  colorSchemes: {
    danger: "red",
    info: "blue",
    link: "blue",
    primary: "blue",
    secondary: "violet",
    success: "green",
    warning: "orange",
  },
  spaces: {
    xs: "1",
    sm: "2",
    md: "4",
    normal: "6",
    lg: "8",
    xl: "12",
    "2xl": "16",
    "3xl": "24",
    "4xl": "32",
  },
}
