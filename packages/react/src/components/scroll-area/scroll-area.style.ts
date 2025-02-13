import { defineComponentSlotStyle } from "../../core"

export const scrollAreaStyle = defineComponentSlotStyle({
  base: {
    inner: {},
    root: {
      "@-moz-document url-prefix()": {
        scrollbarColor: "whiteAlpha.600 transparent",
        _dark: {
          scrollbarColor: "whiteAlpha.600 transparent",
        },
        _light: {
          scrollbarColor: "whiteAlpha.600 transparent",
        },
      },
      outline: 0,
      _dark: {
        _scrollbarThumb: {
          bg: "whiteAlpha.600",
          bgClip: "padding-box",
          _nativeHover: {
            bg: "whiteAlpha.800",
            bgClip: "padding-box",
          },
        },
      },
      _focusVisible: {
        boxShadow: "inline",
      },
      _scrollbar: {
        h: "3",
        w: "3",
      },
      _scrollbarButton: {},
      _scrollbarCorner: {
        bg: "transparent",
      },
      _scrollbarThumb: {
        bg: "blackAlpha.600",
        bgClip: "padding-box",
        border: "3px solid transparent",
        rounded: "full",
        _nativeHover: {
          bg: "blackAlpha.800",
          bgClip: "padding-box",
        },
      },
      _scrollbarTrack: {
        bg: "transparent",
      },
    },
  },
})

export type ScrollAreaStyle = typeof scrollAreaStyle
