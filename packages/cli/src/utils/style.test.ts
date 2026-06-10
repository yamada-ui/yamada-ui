import { isStyleFile, transformHeadless } from "./style"

describe("isStyleFile", () => {
  test.each([
    ["button.style.ts", true],
    ["index.ts", false],
    ["button.tsx", false],
  ])("isStyleFile(%s) returns %s", (fileName, expected) => {
    expect(isStyleFile(fileName)).toBe(expected)
  })
})

describe("transformHeadless", () => {
  test("should empty style values while preserving structure", () => {
    const content = `import { defineComponentStyle } from "../../core"

export const buttonStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    _hover: { color: "red" },
  },

  props: {
    /**
     * If \`true\`, the button is full rounded.
     *
     * @default false
     */
    fullRounded: {
      true: { rounded: "full" },
    },
  },

  variants: {
    ghost: { layerStyle: "ghost" },
    solid: { layerStyle: "solid" },
  },

  sizes: {
    sm: { fontSize: "sm" },
    md: { fontSize: "md" },
  },

  compounds: [{ css: { color: "red" }, variant: "solid" }],

  defaultProps: {
    size: "md",
    variant: "solid",
  },
})

export type ButtonStyle = typeof buttonStyle
`

    expect(transformHeadless(content))
      .toBe(`import { defineComponentStyle } from "../../core"

export const buttonStyle = defineComponentStyle({
  base: {},

  props: {
    /**
     * If \`true\`, the button is full rounded.
     *
     * @default false
     */
    fullRounded: {
      true: {},
    },
  },

  variants: {
    ghost: {},
    solid: {},
  },

  sizes: {
    sm: {},
    md: {},
  },

  compounds: [],

  defaultProps: {},
})

export type ButtonStyle = typeof buttonStyle
`)
  })

  test("should preserve slot keys and references in slot style", () => {
    const content = `import { defineComponentSlotStyle } from "../../core"
import { nativeAccordionStyle } from "../native-accordion"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    ...nativeAccordionStyle.base,
    button: {
      ...nativeAccordionStyle.base?.button,
      "&[aria-disabled=true]": { cursor: "default" },
    },
    panel: { ...nativeAccordionStyle.base?.panel, pb: "3" },
    root: { w: "full" },
  },

  variants: nativeAccordionStyle.variants,

  defaultProps: {
    variant: "plain",
    animate: true,
  },
})

export type AccordionStyle = typeof accordionStyle
`

    expect(transformHeadless(content))
      .toBe(`import { defineComponentSlotStyle } from "../../core"
import { nativeAccordionStyle } from "../native-accordion"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    ...nativeAccordionStyle.base,
    button: { ...nativeAccordionStyle.base?.button },
    panel: { ...nativeAccordionStyle.base?.panel },
    root: {},
  },

  variants: nativeAccordionStyle.variants,

  defaultProps: { animate: true },
})

export type AccordionStyle = typeof accordionStyle
`)
  })

  test("should return content without style definitions unchanged", () => {
    const content = `export const Button = () => {}\n`

    expect(transformHeadless(content)).toBe(content)
  })
})
