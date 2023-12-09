import type { ComponentMultiStyle } from "@yamada-ui/core"

export const FormControl: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "100%",
      position: "relative",
    },
    label: {
      fontSize: "md",
      me: "3",
      mb: "2",
      fontWeight: "medium",
      transitionProperty: "common",
      transitionDuration: "normal",
      opacity: 1,
      _disabled: {
        opacity: 0.4,
      },
    },
    requiredIndicator: {
      ms: "1",
      color: ["danger.500", "danger.400"],
    },
    helperMessage: {
      mt: "2",
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontSize: "sm",
    },
    errorMessage: {
      mt: "2",
      color: ["danger.500", "danger.400"],
      fontSize: "sm",
    },
  },
}
