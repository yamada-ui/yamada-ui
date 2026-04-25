import { defineComponentSlotStyle } from "../../core"

export const codeBlockStyle = defineComponentSlotStyle({
  base: {
    code: {
      bg: "transparent!",
      color: "fg",
      fontFamily: "mono",
      fontSize: "sm",
      lineHeight: "{sizes.5}",
      overflowX: "auto",
      px: "4",
      py: "4",
      w: "full",
    },
    collapseTrigger: {},
    content: {
      bg: "bg.panel",
      position: "relative",
    },
    control: {
      alignItems: "center",
      display: "flex",
      gap: "1",
      ms: "auto",
    },
    copyTrigger: {},
    header: {
      alignItems: "center",
      bg: "bg.panel",
      borderBottomWidth: "1px",
      borderColor: "border",
      display: "flex",
      gap: "2",
      minH: "12",
      px: "3",
      py: "2",
    },
    languageLabel: {
      color: "fg.muted",
      fontFamily: "mono",
      fontSize: "xs",
      lineHeight: "1",
      textTransform: "lowercase",
    },
    root: {
      bg: "bg.panel",
      borderColor: "border",
      borderWidth: "1px",
      overflow: "hidden",
      rounded: "l2",
      w: "full",
    },
    title: {
      color: "fg.emphasized",
      flex: "1",
      fontFamily: "mono",
      fontSize: "sm",
      lineClamp: 1,
      minW: "0",
    },
  },
})

export type CodeBlockStyle = typeof codeBlockStyle
