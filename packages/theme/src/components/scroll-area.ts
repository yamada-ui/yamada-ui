import { ComponentStyle } from "@yamada-ui/core"

export const ScrollArea: ComponentStyle = {
  baseStyle: {
    _scrollbar: {
      w: "3",
      h: "3",
    },
    _scrollbarTrack: {
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
    _scrollbarButton: {},
    _scrollbarCorner: {
      bg: "transparent",
    },
  },
}
