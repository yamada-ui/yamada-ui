import { defineComponentSlotStyle } from "../../core"

export const codeBlockStyle = defineComponentSlotStyle({
  base: {
    code: {
      "&[data-line-numbers]": {
        "& code": {
          counterReset: "line",
        },
        "& code .line": {
          counterIncrement: "line",
          ps: "10",
        },
        "& code .line.diff, & code .line.highlighted": {
          mx: "-4",
          ps: "14",
        },
        "& code .line.diff::before, & code .line.highlighted::before": {
          left: "4",
        },
        "& code .line::before": {
          color: "fg.subtle",
          content: "counter(line)",
          left: "0",
          position: "absolute",
          textAlign: "end",
          userSelect: "none",
          w: "7",
        },
        "& code .line:empty::before": {
          content: "counter(line)",
        },
      },
      "& code": {
        bg: "transparent",
        border: "none",
        color: "inherit",
        display: "block",
        fontSize: "inherit",
        lineHeight: "inherit",
        minH: "inherit",
        p: "0",
        rounded: "inherit",
      },
      "& code .diff, & code .highlighted": {
        display: "block",
        mx: "-4",
        position: "relative",
        px: "4",
      },
      "& code .diff.add": {
        bg: ["green.400/15", "green.500/15"],
      },
      "& code .diff.remove": {
        bg: ["red.400/15", "red.500/15"],
      },
      "& code .highlighted": {
        bg: ["black.400/15", "white.500/15"],
      },
      "& code .highlighted-word": {
        bg: ["black.muted", "white.subtle"],
        borderColor: ["black.emphasized", "white.muted"],
        borderWidth: "1px",
        m: "-1px -2px",
        p: "1px 2px",
        rounded: "l1",
      },
      "& code .line": {
        display: "block",
        minH: "1lh",
        position: "relative",
      },
      "& code .line:empty::before": {
        content: '" "',
      },
      "& span": {
        _dark: {
          color: "{shiki-dark}!",
        },
      },
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
      "&[data-collapsed]": {
        _after: { opacity: "1" },
      },
      bg: "bg.panel",
      position: "relative",
      _after: {
        bgImage: "linear-gradient(to bottom, transparent, {colors.bg.panel})",
        bottom: "10",
        content: '""',
        h: "12",
        insetInline: "0",
        opacity: "0",
        pointerEvents: "none",
        position: "absolute",
        transitionDuration: "moderate",
        transitionProperty: "opacity",
        zIndex: "yamcha",
      },
    },
    control: {
      alignItems: "center",
      display: "flex",
      gap: "1",
      ms: "auto",
    },
    copyTrigger: {},
    footer: {
      alignItems: "center",
      bg: "bg.panel",
      borderColor: "border.muted",
      borderTopWidth: "1px",
      display: "flex",
      justifyContent: "center",
      minH: "10",
      position: "relative",
      px: "3",
      zIndex: "kurillin",
    },
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
