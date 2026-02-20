import type { TSESLint } from "@typescript-eslint/utils"
import perfectionistPlugin from "eslint-plugin-perfectionist"
import { sharedFiles } from "./shared"

const type = "natural"

const semanticSizes = {
  base: "^base$",
  "9xs": "^9xs$",
  "8xs": "^8xs$",
  "7xs": "^7xs$",
  "6xs": "^6xs$",
  "5xs": "^5xs$",
  "4xs": "^4xs$",
  "3xs": "^3xs$",
  "2xs": ["^2xs$", "^hairline$", "^fastest$"],
  xs: ["^xs$", "^thin$", "^tighter$", "^faster$", "^shorter$"],
  sm: ["^sm$", "^light$", "^tight$", "^fast$", "^short$"],
  md: ["^md$", "^normal$", "^moderate$"],
  lg: ["^lg$", "^medium$", "^wide$", "^slow$", "^tall$"],
  xl: ["^xl$", "^semibold$", "^wider$", "^slower$", "^taller$"],
  "2xl": ["^2xl$", "^bold$", "^widest$", "^slowest$"],
  "3xl": ["^3xl$", "^extrabold$"],
  "4xl": ["^4xl$", "^black$"],
  "5xl": "^5xl$",
  "6xl": "^6xl$",
  "7xl": "^7xl$",
  "8xl": "^8xl$",
  "9xl": "^9xl$",
}

const sortPseudos = [
  ["^_hover$"],
  ["^_selected$", "^_active$", "^_focus$", "^_focusVisible$"],
  ["^_invalid$", "^_readOnly$", "^_hidden$"],
  ["^_disabled$", "^_never$"],
]

const otherPseudos = sortPseudos
  .flatMap((pseudos) => pseudos.map((pseudo) => pseudo.replace(/\^|_|\$/g, "")))
  .join("|")

const sortObjectGroups = {
  customGroups: [
    { elementNamePattern: "^aria-.+", groupName: "aria" },
    { elementNamePattern: "^on.*", groupName: "callback" },
    { elementNamePattern: "^data-.+", groupName: "data" },
    { elementNamePattern: "^__.+", groupName: "internal" },
    { elementNamePattern: ".+Props$", groupName: "props" },
    {
      elementNamePattern: `^_(?!.*(${otherPseudos})$).*$`,
      groupName: "pseudos",
    },
    ...sortPseudos.map((elementNamePattern, index) => ({
      elementNamePattern,
      groupName: `pseudos${index + 1}`,
    })),
    ...Object.entries(semanticSizes).map(([groupName, elementNamePattern]) => ({
      elementNamePattern,
      groupName,
    })),
    {
      elementNamePattern: ["^key$", "^ref$", "^id$", "^lang$"],
      groupName: "primary",
    },
    {
      elementNamePattern: ["^as$", "^form$", "^type$", "^htmlFor$"],
      groupName: "secondary",
    },
    {
      elementNamePattern: [
        "^name$",
        "^src$",
        "^srcSet$",
        "^href$",
        "^target$",
        "^rel$",
      ],
      groupName: "tertiary",
    },
    { elementNamePattern: ["^className$", "^alt$"], groupName: "quaternary" },
    { elementNamePattern: ["^css$", "^sx$", "^style$"], groupName: "quinary" },
    {
      elementNamePattern: ["^layerStyle$", "^textStyle$", "^apply$"],
      groupName: "senary",
    },
    {
      elementNamePattern: ["^variant$", "^size$", "^colorScheme$"],
      groupName: "septenary",
    },
  ],
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
    ...sortPseudos.map((_, index) => `pseudos${index + 1}`),
    "props",
    "callback",
    "internal",
  ],
}

export const perfectionistConfig = {
  name: "eslint/perfectionist",
  files: sharedFiles,
  plugins: {
    perfectionist: perfectionistPlugin as unknown as TSESLint.FlatConfig.Plugin,
  },
  rules: {
    "perfectionist/sort-exports": [
      "error",
      {
        type,
        customGroups: [
          {
            anyOf: [{ elementNamePattern: [".style(.js|.jsx|.ts|.tsx)?$"] }],
            groupName: "style",
          },
        ],
        groups: ["style"],
        partitionByNewLine: true,
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        type,
        groups: [
          "type-import",
          ["type-parent", "type-sibling", "type-index"],
          "type-internal",
          ["value-builtin", "value-external"],
          "value-internal",
          ["value-parent", "value-sibling", "value-index"],
          "ts-equals-import",
          "unknown",
        ],
        newlinesBetween: "ignore",
        newlinesInside: "ignore",
        partitionByNewLine: true,
      },
    ],

    "perfectionist/sort-array-includes": ["warn", { type }],
    "perfectionist/sort-interfaces": [
      "warn",
      {
        type,
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
} satisfies TSESLint.FlatConfig.Config
