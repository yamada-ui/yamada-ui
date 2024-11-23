import type { ComponentMultiStyle } from "@yamada-ui/core"

export const FormControl: ComponentMultiStyle<"FormControl"> = {
  baseStyle: {
    container: {
      position: "relative",
      w: "100%",
    },
    errorMessage: {
      color: ["danger.500", "danger.400"],
      display: "block",
      fontSize: "sm",
      mt: "2",
    },
    helperMessage: {
      color: "muted",
      display: "block",
      fontSize: "sm",
      mt: "2",
    },
    label: {
      fontSize: "md",
      fontWeight: "medium",
      mb: "2",
      me: "3",
      opacity: 1,
      transitionDuration: "normal",
      transitionProperty: "common",
      _disabled: {
        opacity: 0.4,
      },
    },
    requiredIndicator: {
      color: ["danger.500", "danger.400"],
      ms: "1",
    },
  },
}
