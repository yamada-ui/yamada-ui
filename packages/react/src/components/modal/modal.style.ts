import { defineComponentSlotStyle } from "../../core"

export const modalStyle = defineComponentSlotStyle({
  base: {
    body: {
      alignItems: "flex-start",
      display: "flex",
      flex: "1",
      flexDirection: "column",
      gap: "md",
      my: "lg",
      px: "lg",
    },
    closeButton: {
      position: "absolute",
      right: "md",
      top: "md",
    },
    content: {
      bg: "bg",
      borderColor: "border.subtle",
      borderWidth: "1px",
      boxShadow: "lg",
      display: "flex",
      flexDirection: "column",
      maxH: "full",
      position: "relative",
      rounded: "l4",
      zIndex: "recoome",
    },
    footer: {
      alignItems: "center",
      display: "flex",
      gap: "md",
      justifyContent: "flex-end",
      pb: "lg",
      px: "lg",
    },
    header: {
      alignItems: "center",
      display: "flex",
      gap: "md",
      justifyContent: "flex-start",
      pt: "lg",
      px: "lg",
    },
    overlay: {
      bg: "bg.overlay",
      h: "dvh",
      inset: "0",
      position: "fixed",
      w: "vw",
      zIndex: "burter",
    },
    root: {
      alignItems: "center",
      display: "flex",
      h: "dvh",
      inset: "0",
      justifyContent: "center",
      p: "md",
      position: "fixed",
      w: "vw",
      zIndex: "jeice",
    },
    title: {
      fontSize: "xl",
      fontWeight: "semibold",
    },
  },

  props: {
    /**
     * The placement of the modal.
     *
     * @default 'center'
     */
    placement: {
      center: {
        root: {
          alignItems: "center",
          justifyContent: "center",
        },
      },
      "center-center": {
        root: {
          alignItems: "center",
          justifyContent: "center",
        },
      },
      "center-end": {
        root: {
          alignItems: "center",
          justifyContent: "flex-end",
        },
      },
      "center-start": {
        root: {
          alignItems: "center",
          justifyContent: "flex-start",
        },
      },
      "end-center": {
        root: {
          alignItems: "flex-end",
          justifyContent: "center",
        },
      },
      "end-end": {
        root: {
          alignItems: "flex-end",
          justifyContent: "flex-end",
        },
      },
      "end-start": {
        root: {
          alignItems: "flex-end",
          justifyContent: "flex-start",
        },
      },
      "start-center": {
        root: {
          alignItems: "flex-start",
          justifyContent: "center",
        },
      },
      "start-end": {
        root: {
          alignItems: "flex-start",
          justifyContent: "flex-end",
        },
      },
      "start-start": {
        root: {
          alignItems: "flex-start",
          justifyContent: "flex-start",
        },
      },
    },
    /**
     * Where scroll behavior should originate.
     *
     * - `inside`: scroll only occurs within the `ModalBody`.
     * - `outside`: the entire `ModalContent` will scroll within the viewport.
     *
     * @default 'inside'
     */
    scrollBehavior: {
      inside: {
        body: {
          overflow: "auto",
        },
      },
      outside: {
        content: {
          overflow: "auto",
        },
      },
    },
  },

  sizes: {
    xs: { content: { maxW: "xs" } },
    sm: { content: { maxW: "sm" } },
    md: { content: { maxW: "md" } },
    lg: { content: { maxW: "lg" } },
    xl: { content: { maxW: "xl" } },
    "2xl": { content: { maxW: "2xl" } },
    "3xl": { content: { maxW: "3xl" } },
    "4xl": { content: { maxW: "4xl" } },
    "5xl": { content: { maxW: "5xl" } },
    "6xl": { content: { maxW: "6xl" } },
    cover: { content: { boxSize: "full" } },
    full: {
      content: { minH: "dvh", minW: "vw", rounded: "0" },
      root: { p: "0" },
    },
  },

  defaultProps: {
    size: "md",
    placement: "center",
    scrollBehavior: "inside",
  },
})

export type ModalStyle = typeof modalStyle
