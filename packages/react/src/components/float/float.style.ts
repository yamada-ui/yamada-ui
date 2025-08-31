import { defineComponentStyle } from "../../core"

export const floatStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    boxSize: "fit-content",
    display: "inline-flex",
    justifyContent: "center",
    position: "absolute",
  },

  props: {
    /**
     * The placement of the float.
     *
     * @default 'start-end'
     */
    placement: {
      center: {},
      "center-center": {},
      "center-end": {},
      "center-start": {},
      end: {},
      "end-center": {},
      "end-end": {},
      "end-start": {},
      start: {},
      "start-center": {},
      "start-end": {},
      "start-start": {},
    },
  },

  compounds: [
    {
      css: {
        insetBlockEnd: "auto",
        insetBlockStart: "{offset-block, 0px}",
        translateY: "-50%",
      },
      placement: /^start/,
    },
    {
      css: {
        insetBlockEnd: "{offset-block, 0px}",
        insetBlockStart: "auto",
        translateY: "50%",
      },
      placement: /^end/,
    },
    {
      css: {
        insetBlock: "50%",
        translateY: "-50%",
      },
      placement: /^center/,
    },
    {
      css: {
        insetInlineEnd: "auto",
        insetInlineStart: "{offset-inline, 0px}",
        translateX: "-50%",
      },
      placement: /start$/,
    },
    {
      css: {
        insetInlineEnd: "{offset-inline, 0px}",
        insetInlineStart: "auto",
        translateX: "50%",
      },
      placement: /end$/,
    },
    {
      css: {
        insetInline: "50%",
        translateX: "-50%",
      },
      placement: /center$/,
    },
  ],

  defaultProps: {
    placement: "start-end",
  },
})

export type FloatStyle = typeof floatStyle
