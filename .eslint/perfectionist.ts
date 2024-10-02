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
    primary: ["key", "ref", "id"],
    props: "*Props",
    quaternary: ["className"],
    quinary: ["css", "sx", "style"],
    secondary: ["as", "form", "type", "htmlFor"],
    tertiary: ["name"],
    ...semanticSizes,
  },
  groups: [
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quinary",
    ...Object.keys(semanticSizes),
    "unknown",
    ["aria", "data"],
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
    "perfectionist/sort-array-includes": ["error", { type }],
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
    "perfectionist/sort-interfaces": [
      "error",
      {
        type,
        groupKind: "required-first",
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-intersection-types": ["error", { type }],
    "perfectionist/sort-jsx-props": [
      "error",
      {
        type,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-maps": ["error", { type }],
    "perfectionist/sort-named-exports": ["error", { type }],
    "perfectionist/sort-named-imports": ["error", { type }],
    "perfectionist/sort-object-types": [
      "error",
      {
        type,
        groupKind: "required-first",
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        type,
        partitionByNewLine: true,
        ...sortObjectGroups,
      },
    ],
    "perfectionist/sort-sets": ["error", { type }],
    "perfectionist/sort-union-types": ["error", { type }],
  },
}
