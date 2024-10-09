import type { TSESLint } from "@typescript-eslint/utils"
import perfectionistPlugin from "eslint-plugin-perfectionist"
import { sharedFiles } from "./shared"

const type = "natural"

const semanticSizes = {
  base: "base",
  "9xs": "9xs",
  "8xs": "8xs",
  "7xs": "7xs",
  "6xs": "6xs",
  "5xs": "5xs",
  "4xs": "4xs",
  "3xs": "3xs",
  "2xs": ["2xs", "hairline", "ultra-fast"],
  xs: ["xs", "thin", "tighter", "faster", "shorter"],
  sm: ["sm", "light", "tight", "fast", "short"],
  md: ["md", "normal"],
  lg: ["lg", "medium", "wide", "slow", "tall"],
  xl: ["xl", "semibold", "wider", "slower", "taller"],
  "2xl": ["2xl", "bold", "widest", "ultra-slow"],
  "3xl": ["3xl", "extrabold"],
  "4xl": ["4xl", "black"],
  "5xl": "5xl",
  "6xl": "6xl",
  "7xl": "7xl",
  "8xl": "8xl",
  "9xl": "9xl",
}

const sortObjectGroups = {
  customGroups: {
    aria: "aria-*",
    callback: "on*",
    data: "data-*",
    internal: "__*",
    primary: ["key", "ref", "id", "lang"],
    props: "*Props",
    pseudos: "_*",
    quaternary: ["className", "alt"],
    quinary: ["css", "sx", "style"],
    secondary: ["as", "form", "type", "htmlFor"],
    senary: ["layerStyle", "textStyle", "baseStyle", "apply"],
    septenary: ["variant", "size", "colorScheme"],
    tertiary: ["name", "src", "srcSet", "href", "target"],
    ...semanticSizes,
  },
  groups: [
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quinary",
    "senary",
    "septenary",
    ...Object.keys(semanticSizes),
    ["aria", "data"],
    "unknown",
    "pseudos",
    "props",
    "callback",
    "internal",
  ],
}

export const perfectionistConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/perfectionist",
  files: sharedFiles,
  plugins: { perfectionist: perfectionistPlugin },
  rules: {
    "perfectionist/sort-exports": ["error", { type }],
    "perfectionist/sort-imports": [
      "error",
      {
        type,
        groups: [
          "type",
          ["external-type", "builtin-type", "internal-type"],
          ["parent-type", "sibling-type", "index-type"],
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
          "object",
          "unknown",
          ["side-effect", "side-effect-style"],
        ],
        newlinesBetween: "never",
      },
    ],

    "perfectionist/sort-array-includes": ["warn", { type }],
    "perfectionist/sort-interfaces": [
      "warn",
      {
        type,
        groupKind: "required-first",
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-intersection-types": ["warn", { type }],
    "perfectionist/sort-jsx-props": [
      "warn",
      {
        type,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-maps": ["warn", { type }],
    "perfectionist/sort-named-exports": ["warn", { type }],
    "perfectionist/sort-named-imports": ["warn", { type }],
    "perfectionist/sort-object-types": [
      "warn",
      {
        type,
        groupKind: "required-first",
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-objects": [
      "warn",
      {
        type,
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-sets": ["warn", { type }],
    "perfectionist/sort-union-types": ["warn", { type }],
  },
}
