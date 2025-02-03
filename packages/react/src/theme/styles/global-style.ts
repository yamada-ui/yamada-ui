import { defineStyles } from "../../core"

export const globalStyle = defineStyles.globalStyle({
  "*, *::before, *::after": {
    borderColor: "border",
    borderStyle: "solid",
    borderWidth: "0",
    focusVisibleRing: "outside",
    fontFeatureSettings: '"cv11"',
    wordWrap: "break-word",
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
