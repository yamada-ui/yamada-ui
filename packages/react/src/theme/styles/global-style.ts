import { defineStyles } from "../../core"

export const globalStyle = defineStyles.globalStyle({
  "*, *::before, *::after": {
    borderColor: "border",
    borderStyle: "solid",
    borderWidth: "0",
    focusVisibleRing: "outline",
    fontFeatureSettings: '"cv11"',
    overflowWrap: "break-word",
  },
  "*::placeholder, *[data-placeholder]": {
    color: "fg.subtle",
  },
  body: {
    colorScheme: "mono",
    bg: "bg",
    color: "fg",
    fontFamily: "body",
    lineHeight: "moderate",
    overflowX: "hidden",
    transitionDuration: "moderate",
    transitionProperty: "background-color",
  },
})
