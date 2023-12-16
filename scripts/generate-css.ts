import { writeFile } from "fs/promises"
import * as p from "@clack/prompts"
import type { CSSObject, ThemeToken, Transforms, Union } from "@yamada-ui/react"
import c from "chalk"
import type * as CSS from "csstype"
import { glob } from "glob"
import { JSDOM } from "jsdom"
import ListIt from "list-it"
import { format, resolveConfig } from "prettier"
import type { Options } from "prettier"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"

const SOURCE_URL = "https://developer.mozilla.org"
const OUT_PATH = "styles.ts"

type CSSProperty = ReturnType<typeof getCSSProperties>[number]
type CSSProperties =
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
  | keyof CSS.ObsoleteProperties
type UIProperties = keyof typeof uiProps
type TransformProp = {
  properties: CSSProperties | UIProperties
  transform: Union<Transforms>
}

type Tokens = Partial<Record<ThemeToken, (CSSProperties | UIProperties)[]>>
type ShorthandProps = Partial<Record<CSSProperties | UIProperties, string[]>>
type TransformProps = Partial<
  Record<Transforms, (CSSProperties | UIProperties | TransformProp)[]>
>
type UIProps = Partial<Record<string, UIOptions>>
type UIOptions = {
  static?: CSSObject
  isProcessResult?: boolean
  properties?: Union<CSSProperties> | Union<CSSProperties>[]
  transform?: TransformOptions
  type?: string
  description?: string[]
}
type TransformOptions =
  | Transforms
  | { first: Transforms; second?: Union<Transforms>; args?: string }

const omittedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const duplicatedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const tokens: Tokens = {
  animations: ["animation"],
  blurs: ["blur", "backdropBlur"],
  borders: [
    "border",
    "borderTop",
    "borderLeft",
    "borderBottom",
    "borderRight",
    "borderY",
    "borderX",
    "borderInline",
    "borderInlineStart",
    "borderInlineEnd",
    "borderBlock",
    "borderBlockStart",
    "borderBlockEnd",
  ],
  colors: [
    "color",
    "fill",
    "stroke",
    "background",
    "backgroundColor",
    "accentColor",
    "outlineColor",
    "textDecorationColor",
    "borderColor",
    "borderTopColor",
    "borderLeftColor",
    "borderBottomColor",
    "borderRightColor",
    "borderInlineStartColor",
    "borderInlineEndColor",
    "borderBlockStartColor",
    "borderBlockEndColor",
  ],
  fontSizes: ["fontSize"],
  fontWeights: ["fontWeight"],
  fonts: ["fontFamily"],
  gradients: ["backgroundImage"],
  letterSpacings: ["letterSpacing"],
  lineHeights: ["lineHeight"],
  radii: [
    "borderRadius",
    "borderTopRightRadius",
    "borderTopLeftRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopRadius",
    "borderBottomRadius",
    "borderRightRadius",
    "borderLeftRadius",
    "borderStartStartRadius",
    "borderStartEndRadius",
    "borderEndStartRadius",
    "borderEndEndRadius",
    "borderInlineStartRadius",
    "borderInlineEndRadius",
  ],
  shadows: ["boxShadow", "textShadow", "dropShadow", "backdropDropShadow"],
  sizes: [
    "width",
    "inlineSize",
    "height",
    "backfaceVisibility",
    "blockSize",
    "minWidth",
    "minInlineSize",
    "minHeight",
    "minBlockSize",
    "maxWidth",
    "maxInlineSize",
    "maxHeight",
    "maxBlockSize",
    "boxSize",
    "flexBasis",
  ],
  spaces: [
    "margin",
    "marginTop",
    "marginBlockStart",
    "marginRight",
    "marginInlineEnd",
    "marginBottom",
    "marginBlockEnd",
    "marginLeft",
    "marginInlineStart",
    "marginInline",
    "marginBlock",
    "padding",
    "paddingTop",
    "paddingBlockStart",
    "paddingRight",
    "paddingBottom",
    "paddingBlockEnd",
    "paddingLeft",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingInline",
    "paddingBlock",
    "marginY",
    "marginX",
    "paddingY",
    "paddingX",
    "gap",
    "rowGap",
    "columnGap",
    "gridColumnGap",
    "gridRowGap",
    "scrollMargin",
    "scrollMarginTop",
    "scrollMarginBottom",
    "scrollMarginLeft",
    "scrollMarginRight",
    "scrollMarginX",
    "scrollMarginY",
    "scrollPadding",
    "scrollPaddingTop",
    "scrollPaddingBottom",
    "scrollPaddingLeft",
    "scrollPaddingRight",
    "scrollPaddingX",
    "scrollPaddingY",
    "inset",
    "insetX",
    "insetInline",
    "insetY",
    "insetBlock",
    "top",
    "insetBlockStart",
    "bottom",
    "insetBlockEnd",
    "left",
    "insetInlineStart",
    "right",
    "insetInlineEnd",
    "translateX",
    "translateY",
  ],
  "transitions.property": ["transitionProperty"],
  "transitions.easing": ["transitionTimingFunction", "animationTimingFunction"],
  "transitions.duration": ["animationDuration", "transitionDuration"],
  zIndices: ["zIndex"],
}

const shorthandProps: ShorthandProps = {
  background: ["bg"],
  boxShadow: ["shadow"],
  backgroundColor: ["bgColor"],
  backgroundImage: ["bgImage", "bgImg", "bgGradient"],
  backgroundClip: ["bgClip"],
  backgroundSize: ["bgSize"],
  backgroundOrigin: ["bgOrigin"],
  backgroundPosition: ["bgPosition"],
  backgroundPositionX: ["bgPositionX", "bgPosX"],
  backgroundPositionY: ["bgPositionY", "bgPosY"],
  backgroundRepeat: ["bgRepeat"],
  backgroundAttachment: ["bgAttachment"],
  color: ["textColor"],
  width: ["w"],
  height: ["h"],
  minWidth: ["minW"],
  minHeight: ["minH"],
  maxWidth: ["maxW"],
  maxHeight: ["maxH"],
  mixBlendMode: ["blendMode"],
  backgroundBlendMode: ["bgBlendMode"],
  overscrollBehavior: ["overscroll"],
  overscrollBehaviorX: ["overscrollX"],
  overscrollBehaviorY: ["overscrollY"],
  flexDirection: ["flexDir"],
  textDecoration: ["textDecor"],
  margin: ["m"],
  marginTop: ["mt"],
  marginRight: ["mr"],
  marginInlineEnd: ["me", "marginEnd"],
  marginBottom: ["mb"],
  marginLeft: ["ml"],
  marginInlineStart: ["ms", "marginStart"],
  marginX: ["mx"],
  marginY: ["my"],
  padding: ["p"],
  paddingTop: ["pt"],
  paddingY: ["py"],
  paddingX: ["px"],
  paddingBottom: ["pb"],
  paddingLeft: ["pl"],
  paddingInlineStart: ["ps", "paddingStart"],
  paddingRight: ["pr"],
  paddingInlineEnd: ["pe", "paddingEnd"],
  position: ["pos"],
  insetInlineStart: ["insetStart"],
  insetInlineEnd: ["insetEnd"],
  listStylePosition: ["listStylePos"],
  listStyleImage: ["listStyleImg"],
  borderInlineStart: ["borderStart"],
  borderInlineStartWidth: ["borderStartWidth"],
  borderInlineStartStyle: ["borderStartStyle"],
  borderInlineStartColor: ["borderStartColor"],
  borderInlineEnd: ["borderEnd"],
  borderInlineEndWidth: ["borderEndWidth"],
  borderInlineEndStyle: ["borderEndStyle"],
  borderInlineEndColor: ["borderEndColor"],
  borderStartStartRadius: ["borderTopStartRadius", "roundedTopStart"],
  borderStartEndRadius: ["borderTopEndRadius", "roundedTopEnd"],
  borderEndStartRadius: ["borderBottomStartRadius", "roundedBottomStart"],
  borderEndEndRadius: ["borderBottomEndRadius", "roundedBottomEnd"],
  borderInlineStartRadius: ["borderStartRadius", "roundedStart"],
  borderInlineEndRadius: ["borderEndRadius", "roundedEnd"],
  borderRadius: ["rounded"],
  borderTopRightRadius: ["roundedTopRight"],
  borderTopLeftRadius: ["roundedTopLeft"],
  borderBottomLeftRadius: ["roundedBottomLeft"],
  borderBottomRightRadius: ["roundedBottomRight"],
  borderTopRadius: ["roundedTop"],
  borderBottomRadius: ["roundedBottom"],
  borderRightRadius: ["roundedRight"],
  borderLeftRadius: ["roundedLeft"],
}

const transformProps: TransformProps = {
  px: [
    "fontSize",
    "margin",
    "marginTop",
    "marginBlockStart",
    "marginRight",
    "marginInlineEnd",
    "marginBottom",
    "marginBlockEnd",
    "marginLeft",
    "marginInlineStart",
    "marginInline",
    "marginBlock",
    "padding",
    "paddingTop",
    "paddingBlockStart",
    "paddingRight",
    "paddingBottom",
    "paddingBlockEnd",
    "paddingLeft",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingInline",
    "paddingBlock",
    "marginX",
    "marginY",
    "paddingX",
    "paddingY",
    "gap",
    "rowGap",
    "columnGap",
    "gridColumnGap",
    "gridRowGap",
    "flexBasis",
    "scrollMargin",
    "scrollMarginTop",
    "scrollMarginBottom",
    "scrollMarginLeft",
    "scrollMarginRight",
    "scrollMarginX",
    "scrollMarginY",
    "scrollPadding",
    "scrollPaddingTop",
    "scrollPaddingBottom",
    "scrollPaddingLeft",
    "scrollPaddingRight",
    "scrollPaddingX",
    "scrollPaddingY",
    "inset",
    "insetX",
    "insetInline",
    "insetY",
    "insetBlock",
    "top",
    "insetBlockStart",
    "bottom",
    "insetBlockEnd",
    "left",
    "insetInlineStart",
    "right",
    "insetInlineEnd",
    "translateX",
    "translateY",
    "borderRadius",
    "borderTopRightRadius",
    "borderTopLeftRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopRadius",
    "borderBottomRadius",
    "borderRightRadius",
    "borderLeftRadius",
    "borderStartStartRadius",
    "borderStartEndRadius",
    "borderEndStartRadius",
    "borderEndEndRadius",
    "borderInlineStartRadius",
    "borderInlineEndRadius",
  ],
  fraction: [
    { properties: "width", transform: "px" },
    { properties: "inlineSize", transform: "px" },
    { properties: "height", transform: "px" },
    { properties: "backfaceVisibility", transform: "px" },
    { properties: "blockSize", transform: "px" },
    { properties: "minWidth", transform: "px" },
    { properties: "minInlineSize", transform: "px" },
    { properties: "minHeight", transform: "px" },
    { properties: "minBlockSize", transform: "px" },
    { properties: "maxWidth", transform: "px" },
    { properties: "maxInlineSize", transform: "px" },
    { properties: "maxHeight", transform: "px" },
    { properties: "maxBlockSize", transform: "px" },
    { properties: "boxSize", transform: "px" },
  ],
  bgClip: ["backgroundClip"],
  gradient: ["backgroundImage"],
  animation: ["animation"],
  transform: ["transform"],
  deg: ["rotate", "skewX", "skewY"],
}

const createUIProps = <T extends UIProps>(props: T) => props

const uiProps = createUIProps({
  marginX: { properties: ["marginInlineStart", "marginInlineEnd"] },
  marginY: { properties: ["marginTop", "marginBottom"] },
  paddingX: { properties: ["paddingInlineStart", "paddingInlineEnd"] },
  paddingY: { properties: ["paddingTop", "paddingBottom"] },
  scrollMarginX: { properties: ["scrollMarginLeft", "scrollMarginRight"] },
  scrollMarginY: { properties: ["scrollMarginTop", "scrollMarginBottom"] },
  scrollPaddingX: { properties: ["scrollPaddingLeft", "scrollPaddingRight"] },
  scrollPaddingY: { properties: ["scrollPaddingTop", "scrollPaddingBottom"] },
  insetX: { properties: ["left", "right"] },
  insetY: { properties: ["top", "bottom"] },
  borderY: { properties: ["borderTop", "borderBottom"] },
  borderX: { properties: ["borderLeft", "borderRight"] },
  borderTopRadius: {
    properties: ["borderTopLeftRadius", "borderTopRightRadius"],
  },
  borderBottomRadius: {
    properties: ["borderBottomLeftRadius", "borderBottomRightRadius"],
  },
  borderRightRadius: {
    properties: ["borderTopRightRadius", "borderBottomRightRadius"],
  },
  borderLeftRadius: {
    properties: ["borderTopLeftRadius", "borderBottomLeftRadius"],
  },
  borderInlineStartRadius: {
    properties: ["borderStartStartRadius", "borderStartEndRadius"],
  },
  borderInlineEndRadius: {
    properties: ["borderEndStartRadius", "borderEndEndRadius"],
  },
  boxSize: { properties: ["width", "height"] },
  translateX: {
    properties: "--ui-translate-x",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-translate-x`.",
    ],
  },
  translateY: {
    properties: "--ui-translate-y",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-translate-y`.",
    ],
  },
  scale: {
    properties: ["--ui-scale-x", "--ui-scale-y"],
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-x` and `--ui-scale-y`.",
    ],
  },
  scaleX: {
    properties: "--ui-scale-x",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-x`.",
    ],
  },
  scaleY: {
    properties: "--ui-scale-y",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-scale-y`.",
    ],
  },
  rotate: {
    properties: "--ui-rotate",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-rotate`.",
    ],
  },
  skewX: {
    properties: "--ui-skew-x",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-skew-x`.",
    ],
  },
  skewY: {
    properties: "--ui-skew-y",
    description: [
      "If `transform=auto` or `transform=auto-3d`, sets the value of `--ui-skew-y`.",
    ],
  },
  filter: {
    transform: { first: "filter" },
    type: `CSS.Property.Filter | "auto"`,
    description: ["The CSS `filter` property."],
  },
  blur: {
    properties: "--ui-blur",
    transform: { first: "function", args: `"blur"` },
    description: ["If `filter=auto`, sets the value of `--ui-blur`."],
  },
  brightness: {
    properties: "--ui-brightness",
    transform: { first: "function", args: `"brightness"` },
    description: ["If `filter=auto`, sets the value of `--ui-brightness`."],
  },
  contrast: {
    properties: "--ui-contrast",
    transform: { first: "function", args: `"contrast"` },
    description: ["If `filter=auto`, sets the value of `--ui-contrast`."],
  },
  dropShadow: {
    properties: "--ui-drop-shadow",
    transform: { first: "function", args: `"drop-shadow"` },
    description: ["If `filter=auto`, sets the value of `--ui-drop-shadow`."],
  },
  grayscale: {
    properties: "--ui-grayscale",
    transform: { first: "function", args: `"grayscale"` },
    description: ["If `filter=auto`, sets the value of `--ui-grayscale`."],
  },
  hueRotate: {
    properties: "--ui-hue-rotate",
    transform: { first: "function", args: `"hue-rotate", transforms.deg` },
    description: ["If `filter=auto`, sets the value of `--ui-hue-rotate`."],
  },
  invert: {
    properties: "--ui-invert",
    transform: { first: "function", args: `"invert"` },
    description: ["If `filter=auto`, sets the value of `--ui-invert`."],
  },
  saturate: {
    properties: "--ui-saturate",
    transform: { first: "function", args: `"saturate"` },
    description: ["If `filter=auto`, sets the value of `--ui-saturate`."],
  },
  sepia: {
    properties: "--ui-sepia",
    transform: { first: "function", args: `"sepia"` },
    description: ["If `filter=auto`, sets the value of `--ui-sepia`."],
  },
  backdropFilter: {
    transform: { first: "filter", args: `"backdrop"` },
    type: `CSS.Property.BackdropFilter | "auto"`,
    description: ["The CSS `backdrop-filter` property."],
  },
  backdropBlur: {
    properties: "--ui-backdrop-blur",
    transform: { first: "function", args: `"blur"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-blur`.",
    ],
  },
  backdropBrightness: {
    properties: "--ui-backdrop-brightness",
    transform: { first: "function", args: `"brightness"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-brightness`.",
    ],
  },
  backdropContrast: {
    properties: "--ui-backdrop-contrast",
    transform: { first: "function", args: `"contrast"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-contrast`.",
    ],
  },
  backdropDropShadow: {
    properties: "--ui-backdrop-drop-shadow",
    transform: { first: "function", args: `"drop-shadow"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-drop-shadow`.",
    ],
  },
  backdropGrayscale: {
    properties: "--ui-backdrop-grayscale",
    transform: { first: "function", args: `"grayscale"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-grayscale`.",
    ],
  },
  backdropHueRotate: {
    properties: "--ui-backdrop-hue-rotate",
    transform: { first: "function", args: `"hue-rotate", transforms.deg` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-hue-rotate`.",
    ],
  },
  backdropInvert: {
    properties: "--ui-backdrop-invert",
    transform: { first: "function", args: `"invert"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-invert`.",
    ],
  },
  backdropSaturate: {
    properties: "--ui-backdrop-saturate",
    transform: { first: "function", args: `"saturate"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-saturate`.",
    ],
  },
  backdropSepia: {
    properties: "--ui-backdrop-sepia",
    transform: { first: "function", args: `"sepia"` },
    description: [
      "If `backdropBlur=auto`, sets the value of `--ui-backdrop-sepia`.",
    ],
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--ui-line-clamp)",
    },
    properties: "--ui-line-clamp",
    type: "number",
    description: ["Used to visually truncate a text after a number of lines."],
  },
  isTruncated: {
    transform: "isTruncated",
    type: "boolean",
    description: ["If `true`, it clamps truncate a text after one line."],
  },
  layerStyle: {
    transform: { first: "styles", args: `"layerStyles"` },
    type: `StringLiteral, "layerStyles"`,
    description: ["Apply layer styles defined in `theme.layerStyles`."],
  },
  textStyle: {
    transform: { first: "styles", args: `"textStyles"` },
    type: `StringLiteral, "textStyles"`,
    description: ["Apply text styles defined in `theme.textStyles`."],
  },
  apply: {
    transform: { first: "styles" },
    description: [
      "Apply other styles defined in `theme.styles`.",
      "",
      "@example",
      "```jsx",
      "<Box apply='mdx.h1'>Box</Box>",
      "```",
      "",
      "This will apply styles defined in `theme.styles.mdx.h1`",
    ],
  },
})

const prettier = async (content: string, options?: Options) => {
  const prettierConfig = await resolveConfig(process.cwd())

  try {
    return format(content, {
      ...prettierConfig,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}

const toCamelCase = (value: string & {}) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

const toKebabCase = (value: string & {}) =>
  value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")

const getDoc = async (type: "CSS" | "SVG") => {
  const res = await fetch(SOURCE_URL + `/docs/Web/${type}`)
  const data = await res.text()

  const dom = new JSDOM(data)

  return dom.window.document
}

const getCSSProperties = (doc: Document) => {
  const list = doc.querySelectorAll(".sidebar-body details")

  const item = Array.from(list).find((item) => {
    const summary = item.querySelector("summary")
    const title = summary?.textContent?.trim()

    return title === "Properties" || title === "Attributes"
  })

  const els = item?.querySelectorAll("li a") as HTMLAnchorElement[] | undefined

  if (!els) return []

  return Array.from(els)
    .filter(
      ({ textContent }) => textContent && !/^(-moz|-webkit)/.test(textContent),
    )
    .map(({ textContent, href }) => {
      const prop = textContent?.includes("-")
        ? toCamelCase(textContent ?? "")
        : textContent ?? ""

      return {
        name: textContent ?? "",
        prop: prop as CSSProperties,
        url: SOURCE_URL + href,
      }
    })
}

const getCSSTypes = async () => {
  const typeInfo: Record<string, { type: string; deprecated: boolean }> = {}

  const paths = await glob("node_modules/**/csstype/index.d.ts")

  const path = paths[0]

  if (!path) return typeInfo

  const { getSourceFile, getTypeChecker } = createProgram([path], {})

  const sourceFile = getSourceFile(path)
  const typeChecker = getTypeChecker()

  if (!sourceFile) return typeInfo

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      isInterfaceDeclaration(statement) || isTypeAliasDeclaration(statement),
  )

  for (const typeStatement of typeStatements) {
    const type = typeChecker.getTypeAtLocation(typeStatement)
    const symbol = type.getSymbol()
    const name = symbol?.getName()
    const deprecated = name === "ObsoleteProperties"

    if (
      name !== "StandardProperties" &&
      name !== "SvgProperties" &&
      name !== "ObsoleteProperties"
    )
      continue

    for (const property of type.getProperties()) {
      const name = property.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)
      const nonNullableType = type.getNonNullableType()
      const value = typeChecker.typeToString(nonNullableType)
      const resolvedValue =
        name === "all"
          ? `CSS.Globals`
          : `CSS.Property.${value.replace(/<.*?>$/, "")}`

      typeInfo[name] = { type: resolvedValue, deprecated }
    }
  }

  return typeInfo
}

const omitProperties = (
  cssProperties: CSSProperty[],
  typeProperties: string[],
  callback?: (message: string) => void,
) => {
  let pickedProperties: CSSProperty[] = []

  const omittedProperties = cssProperties.filter((property) => {
    const hasType = typeProperties.includes(property.prop)

    if (!hasType) pickedProperties = [...pickedProperties, property]

    return hasType
  })

  if (pickedProperties.length) {
    const table = pickedProperties.map(({ name, url }, index) => ({
      row: index + 1,
      name,
      url,
    }))

    const message = omittedList.d(table).toString()

    callback?.(message)
  }

  return omittedProperties
}

const tokenMap = Object.entries(tokens).reduce(
  (prev, [key, list]) => {
    list.forEach((item) => {
      prev[item] = key as ThemeToken
    })

    return prev
  },
  {} as Record<CSSProperties | UIProperties, ThemeToken>,
)

const transformMap = Object.entries(transformProps).reduce(
  (prev, [key, list]) => {
    list.forEach((item) => {
      if (typeof item === "string") {
        prev[item] = key as Transforms
      } else {
        const { properties, transform } = item
        prev[properties] = { first: key as Transforms, second: transform }
      }
    })

    return prev
  },
  {} as Record<CSSProperties | UIProperties, TransformOptions>,
)

const computedType = (
  type: string | string[],
  token: ThemeToken | undefined,
) => {
  let result = ""

  if (typeof type === "string") {
    result = `Token<${type}>`
  } else {
    if (type.length) {
      result = `Token<${type.join(" | ")}>`
    } else {
      result = "Token<StringLiteral>"
    }
  }

  if (token) result = result.replace(/>$/, `, "${token}">`)

  return result
}

const generateDocs = ({
  properties,
  url,
  description = [],
  deprecated,
}: {
  properties: string | string[] | undefined
  url?: string
  description?: string[]
  deprecated?: boolean
}) => {
  if (!description.length) {
    if (!properties) return ""

    if (typeof properties === "string") {
      properties = `\`${properties}\``
    } else {
      properties = properties
        .map((property) => `\`${toKebabCase(property)}\``)
        .join(" and ")
    }

    description = [...description, `The CSS ${properties} property.`]

    if (url) description = [...description, "", `@see Docs ${url}`]
  }

  if (deprecated) description = [...description, "", `@deprecated`]

  return `/**\n${description.map((row) => `* ${row}`).join("\n")}\n*/`
}

const generateStyles = async (
  styles: (CSSProperty & { type: string; deprecated: boolean })[],
) => {
  let standardStyles: string[] = []
  let shorthandStyles: string[] = []
  let styleProps: string[] = []
  let pickedStyles: (CSSProperty & { type: string })[] = []

  styles = styles.filter((style) => {
    const isExists = Object.keys(uiProps).includes(style.prop)

    if (isExists) pickedStyles = [...pickedStyles, style]

    return !isExists
  })

  styles.forEach(({ name, prop, url, type, deprecated }) => {
    const token: ThemeToken | undefined = tokenMap[prop]
    const shorthands = shorthandProps[prop]
    const transform = transformMap[prop]
    const config = getConfig({ properties: prop, token, transform })
    type = computedType(type, token)
    const docs = generateDocs({ properties: name, url, deprecated })

    standardStyles = [...standardStyles, `${prop}: ${config}`]
    styleProps = [...styleProps, ...[docs, `${prop}: ${type}`]]

    if (shorthands) {
      const shorthandStyle =
        config === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        shorthandStyles = [
          ...shorthandStyles,
          `${shorthandProp}: ${shorthandStyle}`,
        ]
        styleProps = [...styleProps, ...[docs, `${shorthandProp}: ${type}`]]
      })
    }
  })

  Object.entries<UIOptions>(uiProps).forEach(
    ([prop, { properties, transform, static: css, type, description }]) => {
      const types = styles
        .filter(({ prop }) =>
          typeof properties === "string"
            ? prop === properties
            : properties?.includes(prop),
        )
        .map(({ type }) => type)
      const token = tokenMap[prop as UIProperties]
      const shorthands = shorthandProps[prop as UIProperties]
      transform ??= transformMap[prop as UIProperties]
      const config = getConfig({ properties, token, transform, css })
      type = computedType(type ?? types, token)
      const docs = generateDocs({ properties, description })

      standardStyles = [...standardStyles, `${prop}: ${config}`]
      styleProps = [...styleProps, ...[docs, `${prop}: ${type}`]]

      if (shorthands) {
        const shorthandStyle =
          config === true
            ? `{ properties: "${prop}" }`
            : `standardStyles.${prop}`

        shorthands.forEach((shorthandProp) => {
          shorthandStyles = [
            ...shorthandStyles,
            `${shorthandProp}: ${shorthandStyle}`,
          ]
          styleProps = [...styleProps, ...[docs, `${shorthandProp}: ${type}`]]
        })
      }
    },
  )

  const content = `
    import type { StringLiteral } from "@yamada-ui/utils"
    import type * as CSS from "csstype"
    import type { Token } from "../css"
    import type { Configs } from "./config"
    import { transforms } from "./config"

    export const standardStyles: Configs = {
      ${standardStyles.join(",\n")}
    }

    export const shorthandStyles: Configs = {
      ${shorthandStyles.join(",\n")}
    }

    export const styles: Configs = { ...standardStyles, ...shorthandStyles }

    export type StyleProps = {
      ${styleProps.join("\n")}
    }
  `

  const data = await prettier(content)

  await writeFile(OUT_PATH, data)

  return pickedStyles
}

const insertTransform = (
  config: string[],
  token: ThemeToken | undefined,
  transform: Union<TransformOptions>,
) => {
  if (typeof transform !== "string") {
    let { first, second, args = "" } = transform

    if (second) args = `transforms.${second}`

    transform = `${first}(${args})`
  }

  if (token) transform = `token("${token}", transforms.${transform})`

  config = [...config, `transform: transforms.${transform}`]

  return config
}

const getConfig = ({
  properties,
  token,
  transform,
  css,
}: {
  properties?:
    | Union<CSSProperties | UIProperties>
    | Union<CSSProperties | UIProperties>[]
  token?: ThemeToken
  transform?: TransformOptions
  css?: CSSObject
}) => {
  if (!token && !transform && !css) return true

  let config: string[] = []

  if (properties) {
    if (typeof properties === "string") {
      const value = `"${properties}"`

      config = [...config, `properties: ${value}`]
    } else {
      const value = `[${properties.map((p) => `"${p}"`).join(", ")}]`

      config = [...config, `properties: ${value}`]
    }
  }

  if (token) config = [...config, `token: "${token}"`]

  if (css) config = [...config, `static: ${JSON.stringify(css)}`]

  if (transform) config = insertTransform(config, token, transform)

  return `{ ${config.join(", ")} }`
}

const main = async () => {
  p.intro(`Generating Yamada UI styles`)

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Getting the "csstype" module`)

    const cssTypes = await getCSSTypes()

    s.stop(`Got the "csstype" module`)

    s.start(`Getting the "MDN Web Docs" document`)

    const cssDoc = await getDoc("CSS")
    const svgDoc = await getDoc("SVG")

    s.stop(`Got the "MDN Web Docs" document`)

    const cssProperties = getCSSProperties(cssDoc)
    const svgProperties = getCSSProperties(svgDoc)
    const exitsProperties = cssProperties.map(({ name }) => name)
    const resolvedProperties = [
      ...cssProperties,
      ...svgProperties.filter(({ name }) => !exitsProperties.includes(name)),
    ]

    const typeProperties = Object.keys(cssTypes)
    const omittedProperties = omitProperties(
      resolvedProperties,
      typeProperties,
      (message) => {
        p.note(message, `Omitted properties that are not present in "csstype"`)
      },
    )

    const styles = omittedProperties.map((property) => {
      const { type, deprecated } = cssTypes[property.prop] ?? {}
      return { ...property, type, deprecated }
    })

    s.start(`Writing file "${OUT_PATH}"`)

    const pickedStyles = await generateStyles(styles)

    s.stop(`Wrote file "${OUT_PATH}"`)

    if (pickedStyles.length) {
      const table = pickedStyles.map(({ name, url }, index) => ({
        row: index + 1,
        name,
        url,
      }))

      const message = duplicatedList.d(table).toString()

      p.note(message, `Duplicated properties that are present in "UIProps"`)
    }

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
