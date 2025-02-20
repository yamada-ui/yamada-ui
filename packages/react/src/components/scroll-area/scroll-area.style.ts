import { defineComponentStyle } from "../../core"

export const scrollAreaStyle = defineComponentStyle({
  base: {
    "@-moz-document url-prefix()": {
      scrollbarColor: "{colors.bg.emphasized} transparent",
      _dark: {
        scrollbarColor: "{colors.bg.emphasized} transparent",
      },
      _light: {
        scrollbarColor: "{colors.bg.emphasized} transparent",
      },
    },
    overflow: "auto",
    _scrollbar: {
      boxSize: "3",
    },
    _scrollbarCorner: {
      bg: "transparent",
    },
    _scrollbarThumb: {
      bg: "bg.emphasized",
      bgClip: "padding-box",
      border: "3px solid transparent",
      rounded: "full",
      _nativeHover: {
        bg: "bg.contrast",
        bgClip: "padding-box",
      },
    },
    _scrollbarTrack: {
      bg: "transparent",
    },
    _hidden: {
      "&::-webkit-scrollbar-thumb": { bg: "transparent" },
      "&::-webkit-scrollbar-track": { bg: "transparent" },
      "@-moz-document url-prefix()": {
        scrollbarColor: "transparent transparent",
        _dark: {
          scrollbarColor: "transparent transparent",
        },
        _light: {
          scrollbarColor: "transparent transparent",
        },
      },
      _dark: {
        "&::-webkit-scrollbar-thumb": { bg: "transparent" },
        "&::-webkit-scrollbar-track": { bg: "transparent" },
        _scrollbarThumb: { bg: "transparent" },
        _scrollbarTrack: { bg: "transparent" },
      },
      _light: {
        "&::-webkit-scrollbar-thumb": { bg: "transparent" },
        "&::-webkit-scrollbar-track": { bg: "transparent" },
        _scrollbarThumb: { bg: "transparent" },
        _scrollbarTrack: { bg: "transparent" },
      },
      _scrollbarThumb: { bg: "transparent" },
      _scrollbarTrack: { bg: "transparent" },
    },
    _never: {
      "&::-webkit-scrollbar": { display: "none" },
      scrollbarWidth: "none",
      _scrollbar: { display: "none" },
    },
  },
})

export type ScrollAreaStyle = typeof scrollAreaStyle
